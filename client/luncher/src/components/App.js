import React, { Component } from 'react';
import { connect } from "react-redux";
import SignupPage from "./signUp/SignupPage";
import Login from "./login/Login";
import { NavLink, withRouter, Route } from 'react-router-dom';


export class App extends Component {
  
  render() {
    return (
      <div className= "App">
        <div className = 'nav'>
          <NavLink className = 'nav-item'  to = '/sign-up'>Sign Up</NavLink>
          <NavLink className = 'nav-item' to = '/login'>Login</NavLink>
        </div> 
      </div>
    );
  }
}
 const mapStateToProps = state =>{
   console.log(state)
     return{
         fetching: state.fetching,
         error: state.error
     }
 }
export default connect(mapStateToProps) (withRouter(App))