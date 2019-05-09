import React, { Component } from 'react';
import { connect } from "react-redux";
import {donatingTo} from "../../actions/donate";
import { Route } from 'react-router-dom';
import Donations from "./Donations";

class DonationsPage extends Component {

  donatingCount = (donor) =>{
    this.props.getDonors(donor);
  }
  render() {
    return (
      <div>
       {/* <Route path ={"/donate"} render= {props =>(<Donations {...props} donors ={this.props.donors}/>)}/> */}
       <Donations />
      </div>
    )
  }
}
const mapStateToProps = state =>{
  console.log(state)
    return{
        donors: state.donationReducer.donors,
        fetching: state.fetching,
        error: state.error
    }
}
export default connect(mapStateToProps, {donatingTo})(DonationsPage);