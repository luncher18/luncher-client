import React, { Component } from 'react';
import { connect } from "react-redux";
import {donatingTo} from "../actions/donate";
import Schools from "./Schools"
import Donations from "./Donations";


class DonationsPage extends Component {

  donatingCount = (donor) =>{
    this.props.getDonors(donor);
  }
  render() {
    return (

      <div className="DonationsPage">
        
       {/* <Route path ={"/donate"} render= {props =>(<Donations {...props} donors ={this.props.donors}/>)}/> */}
       <Donations donors={this.props.donors} />
        <Schools schools={this.props.schools} />
        
        
      </div>
      
     
    )
  }
}


const mapStateToProps = state =>{
  console.log(state)
    return{
        schools: state.schoolReducer.schools,
        donors: state.donationReducer.donors,
        fetching: state.fetching,
        error: state.error
    }
}
      
export default connect(mapStateToProps, {donatingTo})(DonationsPage);