import { 
GET_DONOR,
DID_GET_DONOR,
NO_DONOR,
DONOR,
DID_DONATE,
DIDNT_DONATE,
ERASE_DONOR,
DID_ERASE_DONOR,
NO_DONOR_REMOVED
} from "../actions/donate"

const donorState ={
    donors: [],
    fetchingDonor: false,
    addingDonor: false,
    updatingDonor: false,
    deletingDonor: false,
    error: null,
}

 const donationReducer = (state = donorState, action) =>{
    switch(action.type){
        case GET_DONOR:
        return{
            ...state,
            error: "",
            fetching: true
        };
        case DONOR:
        return{
            ...state,
            fetching: true
        };
        case ERASE_DONOR:
        return{
            ...state,
            fetching: true
        };
        case DID_GET_DONOR:
        return{
            ...state,
            friends: action.payload,
            fetching: false,
            error: ""
        };
        case NO_DONOR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        case DID_DONATE:
        console.log(action.payload)
        console.log(state)
        return{
            ...state,
            friends:  [...state.donors, action.payload],
            fetching: false,
            error: ""
        };
        case DIDNT_DONATE:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        case DID_ERASE_DONOR:
        return {
            ...state,
            fetching: false,
            error: "",
            friends: state.donors.filter(donor =>(donor.id !== action.payload))
        }
        case NO_DONOR_REMOVED:
        return{
            ...state,
            fetching: false,
            error: action.payload
        }
        default:
        return{...state};
    }
};
export default donationReducer;