import { combineReducers } from "redux";
import donationReducer from "./donationReducer";
import bananaReducer from "./bananaReducer";
import registerReducer from "./registerReducer";
import schoolReducer from "./schoolReducer";

export default combineReducers({
    bananaReducer,
    donationReducer,
    registerReducer,
    schoolReducer
});