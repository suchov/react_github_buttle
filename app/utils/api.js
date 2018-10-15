var axios = require('axios');

var id = "b1fa3ffbaabe25c4325a";
var sec = "1b64570df834104e1c57babaa08a6fceb9181566";
var params = "?client_id=" + id + "&client_secret=" + sec;

const getProfile = (username) => {
  return axios.get('https://api.github.com/users/' + username + params)
    .then((user) => {
      return user.data;
    });
}

const getRepos = (username) => {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}

const getStarCount = (repos) => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count
  }, 0);
}

const calculateScore = (profile, repos) => {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

const handleError = (error) => {
  console.warn(error);
  return null;
}

const getUserData = (player) => {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then((data) => {
    var profile = data[0];
    var repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  });
}

const sortPlayers = (players) => {
  return players.sort(function (a,b) {
    return b.score - a.score;
  });
}

module.exports = {
  battle: (players) => {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError);
  },
  fetchPopularRepos: (language) => {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items;
      });
  }
};