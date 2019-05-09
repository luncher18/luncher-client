import { combineReducers } from "redux";
import donationReducer from "./donationReducer";
import bananaReducer from "./bananaReducer";
import registerReducer from "./registerReducer";


export default combineReducers({
    bananaReducer,
    donationReducer,
    registerReducer
});