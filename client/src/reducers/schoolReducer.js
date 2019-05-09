import { 
    GET_SCHOOL,
    SUCCESSFUL_GET_SCHOOL,
    FAILED_GET_SCHOOL,
    SHOW_SCHOOL,
    SUCCESSFUL_SHOW_SCHOOL,
    FAILED_SHOW_SCHOOL
} from "../actions/schools"

const schoolState ={
    schools: [],
    fetchingSchool: false,
    addingSchool: false,
    updatingSchool: false,
    deletingSchool: false,
    error: null,
}

const schoolReducer = (state = schoolState, action) =>{
    console.log('reducer', action);
    switch(action.type){
        case GET_SCHOOL:
        return{
            ...state,
            fetching: true
        };
        case SUCCESSFUL_GET_SCHOOL:
        return{
            ...state,
            schools:  [...state.schools, action.payload],
            fetching: false,
            error: ""
        };
        case FAILED_GET_SCHOOL:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        case SHOW_SCHOOL:
        return{
            ...state,
            fetching: true
        };
        case SUCCESSFUL_SHOW_SCHOOL:
        return{
            ...state,
            schools:  [...state.schools, action.payload],
            fetching: false,
            error: ""
        };
        case FAILED_SHOW_SCHOOL:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        default:
        return{...state};
    }
};


export default schoolReducer