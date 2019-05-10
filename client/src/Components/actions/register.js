import axios from "axios";

// Register Export
export const REGISTER = "REGISTER";
export const SUCCESSFUL_REGISTER = "SUCCESSFUL_REGISTER";
export const FAILED_REGISTER = "FAILED_REGISTER";
//Data Export
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const URL = "https://luncher-backend.herokuapp.com/api";

export const hasRegistered = ()=> (dispatch)=>{
    dispatch({type: REGISTER});
    axios
    .get(`${URL}/users`)
    .then(response => dispatch({type:SUCCESSFUL_REGISTER, payload: response.data}))
    .catch(error => dispatch({type: FAILED_REGISTER, payload: error}))
}

export const newRegister = (index)=> (dispatch)=>{
    dispatch({type: REGISTER});
    axios
    .post(`${URL}/register`, index)
    .then(response => {dispatch({type: SUCCESSFUL_REGISTER, payload: response.data}); return true})
    .catch(error => {dispatch({type: FAILED_REGISTER, payload: error}); return false})
}

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get(`${URL}/`, {headers: {Authorization: localStorage.getItem('token')}})
        .then(res => {console.log(res);dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })})
        .catch(err => {console.log(err.res);dispatch({ type: FETCH_DATA_FAILURE, payload: err.res });
        });
 };
 