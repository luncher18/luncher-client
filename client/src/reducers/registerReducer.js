import { 
    REGISTER,
    SUCCESSFUL_REGISTER,
    FAILED_REGISTER
} from "../actions/register"

const userState ={
    users: [],
    fetchingUser: false,
    addingUser: false,
    updatingUser: false,
    deletingUser: false,
    error: null,
}

const registerReducer = (state = userState, action) =>{
    console.log('reducer', action);
    switch(action.type){
        case REGISTER:
        return{
            ...state,
            fetching: true
        };
        case SUCCESSFUL_REGISTER:
        console.log(action.payload)
        console.log(state)
        return{
            ...state,
            users:  [...state.users, action.payload],
            fetching: false,
            error: ""
        };
        case FAILED_REGISTER:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        default:
        return{...state};
    }
};


export default registerReducer