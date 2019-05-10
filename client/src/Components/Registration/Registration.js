import React, { Component } from 'react';
import { connect } from "react-redux";
import {  hasRegistered, newRegister,} from "../actions/register";
import RegisterForm from "./RegisterForm";


export class Registration extends Component {
  componentDidMount(){
      this.props.hasRegistered()
  }

  registering = (donor) =>{
    this.props.newRegister(donor);

  }
  
  render() {
    return (
      <div>
        <h1>Register Here</h1>
        <RegisterForm registered={this.registering}  users={this.props.users}/>
      </div>
    )
  }
}
 const mapStateToProps = state =>{
   console.log(state)
     return{
         users: state.registerReducer.users,
         fetching: state.fetching,
         error: state.error
     }
 }
export default connect(mapStateToProps, { hasRegistered, newRegister})(Registration)