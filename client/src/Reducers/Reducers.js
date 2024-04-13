import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentUserReducer from "./CurrentUserReducer";

export default combineReducers({
  authReducer,
  currentUserReducer,
});
