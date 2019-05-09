import axios from "axios";

export const GET_SCHOOL = "GET_SCHOOL";
export const SUCCESSFUL_GET_SCHOOL = "SUCCESSFUL_GET_SCHOOL";
export const FAILED_GET_SCHOOL = "FAILED_GET_SCHOOL";

export const SHOW_SCHOOL = "SHOW_SCHOOL";
export const SUCCESSFUL_SHOW_SCHOOL = "SUCCESSFUL_SHOW_SCHOOL";
export const FAILED_SHOW_SCHOOL = "FAILED_SHOW_SCHOOL";

const URL = "https://luncher-backend.herokuapp.com/api";

export const getSchools = ()=> (dispatch)=>{
    dispatch({type: GET_SCHOOL});
    axios
    .get(`${URL}/schools`)
    .then(response => dispatch({type:SUCCESSFUL_GET_SCHOOL, payload: response.data}))
    .catch(error => dispatch({type: FAILED_GET_SCHOOL, payload: error}))
}

export const showSchool = (index)=> (dispatch)=>{
    dispatch({type: SHOW_SCHOOL});
    axios
    .post(`${URL}/schools`, index)
    .then(response => {dispatch({type: SUCCESSFUL_SHOW_SCHOOL, payload: response.data}); return true})
    .catch(error => {dispatch({type: FAILED_SHOW_SCHOOL, payload: error}); return false})
}
