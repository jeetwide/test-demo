import { contactReducer } from "./contactReducer";
import { combineReducers } from "redux";
import rootReducer from "../reducers";

export default combineReducers({
  contact: contactReducer,
});
