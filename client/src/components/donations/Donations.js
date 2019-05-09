import React from "react";
import { connect } from "react-redux";

class Donations extends React.Component {
    constructor(){
        super();
        this.state = {
                id: "",
                amount: "",
                created_at: "",
                updated_at: "",
                donorID: "",
                schoolID: "",
                fundedSchool: {
                    schoolName: "",
                    fundsNeeded: "",
                    fundsReceived: ""
            }
        }
    }
    changeHandler = e =>{
       this.setState({
         [e.target.name]: e.target.value
       });
    }
    submitHandler = e =>{
        e.preventDefault();
        const{ amount, created_at, updated_at, donorID, schoolID, fundedSchool, id} = this.state;
        this.props.adding({ amount, created_at, updated_at, donorID, schoolID, fundedSchool, id});
        this.setState({ 
            id: "",
            amount: "",
            created_at: "",
            updated_at: "",
            donorID: "",
            schoolID: "",
            fundedSchool: {
                schoolName: "",
                fundsNeeded: "",
                fundsReceived: ""
            }
        })
    }
    
    render(){
        return(
            <form onSubmit = {this.submitHandler}>
                <input onChange = {this.changeHandler} type = "number" name = "amount" placeholder='Amount' value={this.state.amount} required/>
                <input onChange = {this.changeHandler} type = "text" name = "donorId" placeholder="donorId" value={this.state.donorId}  required/>
                <input onChange = {this.changeHandler} type = "text" name = "schoolId" placeholder="schoolId" value={this.state.schoolId} required/>
                <input onChange = {this.changeHandler} type = "selection" name = "fundedSchool" placeholder="fundedSchool" value={this.props.schools} required/>
                <button type = "submit">Donations</button>
            </form>
            
        )
    }
}
const mapStateToProps = state =>{
    return {error: state.error}
}

export default connect(mapStateToProps)(Donations)