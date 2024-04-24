import * as api from "../api/api.js";

export const addTolikedVideo = (likedVideoData) => async (dispatch) => {
  try {
    const { data } = await api.addToLikedVideo(likedVideoData);
    dispatch({ type: "POST_LIKEDVIDEO", data });
    dispatch(getAlllikedVideo());
  } catch (error) {
    console.log(error);
  }
};

export const getAlllikedVideo = () => async (dispatch) => {
  try {
    console.log(" before liked video action");
    const { data } = await api.getAlllikedVideo();
    console.log("liked video action", data);
    dispatch({ type: "FETCH_ALL_LIKED_VIDEOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletelikedVideo = (likedVideoData) => async (dispatch) => {
  try {
    const { videoId, Viewer } = likedVideoData;
    await api.deletelikedVideo(videoId, Viewer);
    console.log(`deleted ${likedVideoData}`);
    dispatch(getAlllikedVideo());
  } catch (error) {
    console.log(error);
  }
};
