import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentUserReducer from "./CurrentUserReducer";
import chanelReducers from "./ChannelReducer";
import videoReducer from "./VideoReducer";
import likedVideoReducer from "./LikedVideoReducer";
import watchLaterReducer from "./WatchLaterReducer";
import HistoryReducer from "./HistoryReducer";
import commentReducer from "./CommentReducer.js";
import likedCommentReducer from "./LikedCommentReducer.js";
import DislikedCommentReducer from "./DislikedCommentReducer.js";

export default combineReducers({
  authReducer,
  currentUserReducer,
  channels: chanelReducers,
  videoReducer,
  likedVideo: likedVideoReducer,
  WatchLater: watchLaterReducer,
  HistoryReducer,
  commentReducer,
  likedCommentReducer,
  DislikedCommentReducer,

  // /
});
