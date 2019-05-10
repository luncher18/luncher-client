import React from "react";
import { connect } from "react-redux";

class RegisterForm extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            role: ""
        }
    }
    changeHandler = e =>{
       this.setState({
         [e.target.name]: e.target.value
       });
    }
    submitHandler = e =>{
        e.preventDefault();
        const{firstName, lastName, email, role, id} = this.state;
        this.props.donatingTo({ firstName, lastName, email, role, id});
        this.setState({ 
            firstName: "",
            lastName: "",
            email: "",
            role: ""
        })
    }
    
    render(){
        return(
            <form onSubmit = {this.submitHandler}>
                <input onChange = {this.changeHandler} type = "text" name = "firstName" placeholder='First Name' value={this.state.name} required/>
                <input onChange = {this.changeHandler} type = "number" name = "lastName" placeholder="Last Name" value={this.state.phone} required/>
                <input onChange = {this.changeHandler} type = "text" name = "email" placeholder="Email" value={this.state.anniversary}/>
                <input onChange = {this.changeHandler} type = "text" name = "role" placeholder="Role" value={this.state.birthday}  required/>
                <button type = "submit">Register</button>
            </form>
            
        )
    }
}
const mapStateToProps = state =>{
    return {error: state.error}
}

export default connect(mapStateToProps)(RegisterForm)