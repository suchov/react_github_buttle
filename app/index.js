var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var PropTypes = require('prop-types');
var App = require('./components/App');

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

// - Implicit Binding
// - Emplicit Binding
// - New Binding
// - window Binding

// Explicit Byding
// call, apply, bind

// New Binding/ Window Binding

// class Bage extends React.Component {
//     render() {
//         return(
//             <div>
//                 <img
//                     src = {this.props.img}
//                     alt = 'Avatar'
//                     style = {{width: 100, height: 100}}
//                 />
//                 <h1>Name: {this.props.name}</h1>
//                 <h3>username: {this.props.username}</h3>
//             </div>
//         )
//     }
// }

// Bage.propTypes = {
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired
// }

// ReactDOM.render(
//     <Bage 
//     name = 'Artem Sychov'
//     username = 'such'
//     img = {'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'}
//     />,
//     document.getElementById('app')
// )

// class Users extends React.Component{
//     render(){
//         var friends = this.props.list.filter(function(user){
//             return user.friend === true;
//         });

//         var nonFriends = this.props.list.filter(function (user) {
//             return user.friend !== true;
//         });

//         return(
//             <div>
//                 <h1>Friends</h1>
//                 <ul>
//                     {friends.map(function(user){
//                         return(
//                             <li key={user.name}>
//                                 {user.name}
//                             </li>
//                         )
//                     })
//                     }
//                 </ul>

//                 <hr/>

//                 <h1>Non Friends</h1>
//                 <ul>
//                     {
//                         nonFriends.map(function (user) {
//                         return(
//                             <li key={user.name}>
//                                 {user.name}
//                             </li>
//                         )
//                     })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// Users.propTypes = {
//     list: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         friend: PropTypes.bool.isRequired
//     })),
// }

// ReactDOM.render(
//     <Users list={[
//         {name: 'Tyler', friend: true},
//         { name: 'Ryan', friend: true},
//         {name: 'Michael', friend: false},
//         {name: "Mikenzi", friend: false},
//         {name: "Jessica", friend: true},
//         {name: 'Dan', friend: false} ]}
//     />,
//     document.getElementById('app')
// );