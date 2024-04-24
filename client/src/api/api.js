import axios from "axios";

// const API = axios.create({ baseURL: `https://me-tube-gffn.onrender.com/` });
const API = axios.create({ baseURL: " http://localhost:8080" });
// const API = axios.create({
//   baseURL: `https://youtubeclone5031.herokuapp.com/`,
// });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const login = async (authData) => {
  return API.post("/user/login", authData);
};

export const updateChannel = (id, data) => {
  return API.patch(`/user/updateChannel/${id}`, data);
};

export const fetchAllChannel = () => {
  return API.get("/user/getAllChannels");
};

export const uploadVideo = (fileData, fileOptions) => {
  console.log("Uploading video api", fileData, fileOptions);
  return API.post("/video/uploadVideo", fileData, fileOptions);
};

export const getVideos = () => API.get("/video/getvideos");

export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, { Like });
// export const viewsVideo = (id) => API.patch(`/video/view/${id}`);

export const addToLikedVideo = (likedVideoData) => {
  console.log(likedVideoData);
  return API.post("/video/likeVideo", likedVideoData);
};

export const getAlllikedVideo = () => {
  console.log("getAlllikedVideo");
  return API.get("/video/getAlllikeVideo");
};
export const deletelikedVideo = (videoId, Viewer) =>
  API.delete(`/video/deleteLikedVideo/${videoId}/${Viewer}`);

// export const addSubChannel = (subChannel) =>
//   API.post("/channel/subChannel", subChannel);
// export const getSubChannel = () => API.get("/channel/getsubChannel");
// export const deleteSubChannel = (uploader, Viewer) =>
//   API.delete(`/channel/deletesubChannel/${uploader}/${Viewer}`);

export const viewsVideo = (id) => API.patch(`/video/view/${id}`);

export const addTowatchLater = (watchLaterData) => {
  console.log("watchLaterData", watchLaterData);
  return API.post("/video/watchLater", watchLaterData);
};
export const getAllwatchLater = () => API.get("/video/getAllwatchLater");
export const deleteWatchLater = (videoId, Viewer) =>
  API.delete(`/video/deleteWatchlater/${videoId}/${Viewer}`);
export const addToHistory = (HistoryData) =>
  API.post("/video/History", HistoryData);
export const getAllHistory = () => API.get("/video/getAllHistory");
export const deleteHistory = (userId) =>
  API.delete(`/video/deleteHistory/${userId}`);

export const postComment = (CommentData) =>
  API.post("/comment/post", CommentData);
export const deleteComment = (id) => {
  console.log("delete comment api", id);

  return API.delete(`/comment/delete/${id}`);
};
export const editComment = (id, commentBody) =>
  API.patch(`/comment/edit/${id}`, { commentBody });
export const getAllComment = () => API.get("/comment/get");

// export const likeComment = (id, Like) => {
//   return API.patch(`/comment/like/${id}`, { Like });
// };

export const addToLikedComment = (likedCommentData) => {
  console.log(likedCommentData);
  return API.post("/comment/likeComment", likedCommentData);
};

export const getAlllikedComment = () => {
  console.log("getAlllikedVideo");
  return API.get("/comment/getAlllikeComment");
};
export const deletelikedComment = (CommentId, Viewer) =>
  API.delete(`/comment/deleteLikedComment/${CommentId}/${Viewer}`);

export const likeComment = (commentId, Like) => {
  return API.post(`/comment/like/${commentId}`, { Like });
};

export const addToDislikedComment = (DislikedCommentData) => {
  console.log(DislikedCommentData);
  return API.post("/comment/DislikeComment", DislikedCommentData);
};

export const getAllDislikedComment = () => {
  console.log("getAlllikedVideo");
  return API.get("/comment/getAllDislikeComment");
};
export const deleteDislikedComment = (CommentId, Viewer) =>
  API.delete(`/comment/deleteDislikedComment/${CommentId}/${Viewer}`);

export const DislikeComment = (commentId, Dislike) => {
  return API.post(`/comment/Dislike/${commentId}`, { Dislike });
};
