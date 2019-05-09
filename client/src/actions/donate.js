import axios from "axios";

// get donor
export const GET_DONOR = "GET_DONOR";
export const DID_GET_DONOR = "DID_GET_DONOR";
export const NO_DONOR = "NO_DONOR";
//update donor 
export const DONOR = "DONOR";
export const DID_DONATE = "DID_DONATE";
export const DIDNT_DONATE = "DIDNT_DONATE";
// remove donor
export const ERASE_DONOR = "ERASE_DONOR";
export const DID_ERASE_DONOR = "DID_ERASE_DONOR";
export const NO_DONOR_REMOVED = "NO_DONOR_REMOVED";

const URL = "https://luncher-backend.herokuapp.com/api";

export const getDonors = ()=> (dispatch)=>{
    dispatch({type: GET_DONOR});
    axios
    .get(`${URL}/donor/:lastname`)
    .then(response => dispatch({type:DID_GET_DONOR, payload: response.data}))
    .catch(error => dispatch({type:NO_DONOR, payload: error}))
}

export const donatingTo = (index)=> (dispatch)=>{
    dispatch({type: DONOR});
    axios
    .put(`${URL}/donor/:lastname`, index)
    .then(response => {dispatch({type: DID_DONATE, payload: response.data}); return true})
    .catch(error => {dispatch({type: DIDNT_DONATE, payload: error}); return false})
}

export const eraseDonor = (donor) => (dispatch)=>{
    dispatch({type: ERASE_DONOR })
    axios
    .delete(`${URL}/donor/${donor}`)
    .then(() => {dispatch({type: DID_ERASE_DONOR, payload: donor}); return true})
    .catch(error => {dispatch({type: NO_DONOR_REMOVED, payload: error}); return false})
}