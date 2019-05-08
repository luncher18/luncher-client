//Axios Import
import axios from "axios";
//SCHOOL Exports
export const GET_SCHOOL = "GET_SCHOOL";
export const CORRECT_GET_SCHOOL = "CORRECT_GET_SCHOOL";
export const FAILED_GET_SCHOOL = "FAILED_GET_SCHOOL";
export const ADD_SCHOOL = "ADD_SCHOOL";
export const CORRECT_ADD_SCHOOL = "CORRECT_ADD_SCHOOL";
export const FAILED_ADD_SCHOOL = "FAILED_ADD_SCHOOL";
export const REMOVE_SCHOOL = "REMOVE_SCHOOL";
export const CORRECT_REMOVE_SCHOOL = "CORRECT_REMOVE_SCHOOL";
export const FAILED_REMOVE_SCHOOL = "FAILED_REMOVE_SCHOOL";

const URL = "https://luncher-backend.herokuapp.com/api/schools"

export const getSchool = ()=> (dispatch)=>{
    dispatch({type: GET_SCHOOL});
    axios
    .get(`${URL}/api/`)
    .then(response => dispatch({type:CORRECT_GET_SCHOOL, payload: response.data}))
    .catch(error => dispatch({type: FAILED_GET_SCHOOL, payload: error}))
}

export const addFriend = (index)=> (dispatch)=>{
    dispatch({type: ADD_SCHOOL});
    axios
    .post(`${URL}/api/`, index)
    .then(response => {dispatch({type: CORRECT_ADD_SCHOOL, payload: response.data}); return true})
    .catch(error => {dispatch({type: FAILED_ADD_SCHOOL, payload: error}); return false})
    
}

export const removeFriend = (school) => (dispatch)=>{
    dispatch({type: REMOVE_SCHOOL})
    axios
    .delete(`${URL}/api/${school}`)
    .then(() => {dispatch({type: CORRECT_REMOVE_SCHOOL, payload: school}); return true})
    .catch(error => {dispatch({type: FAILED_REMOVE_SCHOOL, payload: error}); return false})
}