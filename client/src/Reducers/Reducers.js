import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentUserReducer from "./CurrentUserReducer";
import chanelReducers from "./ChannelReducer";

export default combineReducers({
  authReducer,
  currentUserReducer,
  chanelReducers,
});
