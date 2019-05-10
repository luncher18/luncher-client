import axios from "axios";

export const GET_SCHOOL = "GET_SCHOOL";
export const SUCCESSFUL_GET_SCHOOL = "SUCCESSFUL_GET_SCHOOL";
export const FAILED_GET_SCHOOL = "FAILED_GET_SCHOOL";

export const SHOW_SCHOOL = "SHOW_SCHOOL";
export const SUCCESSFUL_SHOW_SCHOOL = "SUCCESSFUL_SHOW_SCHOOL";
export const FAILED_SHOW_SCHOOL = "FAILED_SHOW_SCHOOL";

export const ERASE_SCHOOL = "ERASE_SCHOOL";
export const SUCCESSFUL_ERASE_SCHOOL = "SUCCESSFUL_ERASE_SCHOOL";
export const FAILED_ERASE_SCHOOL = "FAILED_ERASE_SCHOOL";

export const UPDATE_SCHOOL = "UPDATE_SCHOOL";
export const SUCCESSFUL_UPDATE_SCHOOL = "SUCCESSFUL_UPDATE_SCHOOL";
export const FAILED_UPDATE_SCHOOL = "FAILED_UPDATE_SCHOOL";

export const GET_SCHOOL_ADMIN = "GET_SCHOOL_ADMIN";
export const SUCCESSFUL_GET_SCHOOL_ADMIN = "SUCCESSFUL_GET_SCHOOL_ADMIN";
export const FAILED_GET_SCHOOL_ADMIN = "FAILED_GET_SCHOOL_ADMIN";

export const ADD_SCHOOL_ADMIN = "ADD_SCHOOL_ADMIN";
export const SUCCESSFUL_ADD_SCHOOL_ADMIN = "SUCCESSFUL_ADD_SCHOOL_ADMIN";
export const FAILED_ADD_SCHOOL_ADMIN = "FAILED_ADD_SCHOOL_ADMIN";

const URL = "https://luncher-backend.herokuapp.com/api";


//==============================================Admin Actions====================================================//

export const getSchoolAdmin = ()=> (dispatch)=>{
    dispatch({type: GET_SCHOOL_ADMIN});
    axios
    .get(`${URL}/admin/school`)
    .then(response => dispatch({type:SUCCESSFUL_GET_SCHOOL_ADMIN, payload: response.data}))
    .catch(error => dispatch({type: FAILED_GET_SCHOOL_ADMIN, payload: error}))
}
export const addSchoolAdmin = ()=> (dispatch)=>{
    dispatch({type: ADD_SCHOOL_ADMIN});
    axios
    .post(`${URL}/admin/school`)
    .then(response => dispatch({type:SUCCESSFUL_ADD_SCHOOL_ADMIN, payload: response.data}))
    .catch(error => dispatch({type: FAILED_ADD_SCHOOL_ADMIN, payload: error}))
}
//======================================================School Actions=============================================//

export const getSchools = ()=> (dispatch)=>{
    dispatch({type: GET_SCHOOL});
    axios
    .get(`${URL}/schools`)
    .then(response => dispatch({type:SUCCESSFUL_GET_SCHOOL, payload: response.data}))
    .catch(error => dispatch({type: FAILED_GET_SCHOOL, payload: error}))
}

export const addSchool = (index)=> (dispatch)=>{
    dispatch({type: SHOW_SCHOOL});
    axios
    .post(`${URL}/schools`, index)
    .then(response => {dispatch({type: SUCCESSFUL_SHOW_SCHOOL, payload: response.data}); return true})
    .catch(error => {dispatch({type: FAILED_SHOW_SCHOOL, payload: error}); return false})
}

export const removeSchool = ()=> (dispatch)=>{
    dispatch({type: ERASE_SCHOOL});
    axios
    .delete(`${URL}/admin/school`)
    .then(response => {dispatch({type: SUCCESSFUL_ERASE_SCHOOL, payload: response.data}); return true})
    .catch(error => {dispatch({type: FAILED_ERASE_SCHOOL, payload: error}); return false})
}

export const updateSchool = (school)=> (dispatch)=>{
    dispatch({type: UPDATE_SCHOOL});
    axios
    .put(`${URL}/school`, school)
    .then(response => {dispatch({type: SUCCESSFUL_UPDATE_SCHOOL, payload: response.data}); return true})
    .catch(error => {dispatch({type: FAILED_UPDATE_SCHOOL, payload: error}); return false})
}