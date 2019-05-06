import { 
    GET_SCHOOL, 
    CORRECT_GET_SCHOOL, 
    FAILED_GET_SCHOOL, 
    ADD_SCHOOL, 
    REMOVE_SCHOOL,
    FAILED_REMOVE_SCHOOL, 
    CORRECT_REMOVE_SCHOOL,
    CORRECT_ADD_SCHOOL,
    FAILED_ADD_SCHOOL
} from "../actions"

const schoolState ={
    schools: [],
    fetchingSchool: false,
    addingSchool: false,
    updatingSchool: false,
    deletingSchool: false,
    error: null,
}
console.log(schoolState)
 const schoolsReducer = (state = schoolState, action) =>{
    console.log('reducer', action);
    switch(action.type){
        case GET_SCHOOL:
        return{
            ...state,
            error: "",
            fetching: true
        };
        case ADD_SCHOOL:
        return{
            ...state,
            fetching: true
        };
        case REMOVE_SCHOOL:
        return{
            ...state,
            fetching: true
        };
        case CORRECT_GET_SCHOOL:
        console.log(action.payload)
        console.log(state)
        return{
            ...state,
            schools: action.payload,
            fetching: false,
            error: ""
        };
        case FAILED_GET_SCHOOL:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        case CORRECT_ADD_SCHOOL:
        console.log(action.payload)
        console.log(state)
        return{
            ...state,
            schools:  [...state.schools, action.payload],
            fetching: false,
            error: ""
        };
        case FAILED_ADD_SCHOOL:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        case FAILED_REMOVE_SCHOOL:
        return{
            ...state,
            fetching: false,
            error: action.payload
        }
        case CORRECT_REMOVE_SCHOOL:
        return {
            ...state,
            fetching: false,
            error: "",
            schools: state.schools.filter(donated =>(donated.id !== action.payload))
        }
        default:
        return{...state};
    }
};
export default schoolsReducer;