import * as api from "../api/api.js";

export const addTolikedComment = (likedCommentData) => async (dispatch) => {
  try {
    const { data } = await api.addToLikedComment(likedCommentData);
    console.log("Added to LikedComment", data);
    dispatch({ type: "POST_LIKED_COMMENT", data });
    dispatch(getAlllikedComment());
  } catch (error) {
    console.log(error);
  }
};

export const getAlllikedComment = () => async (dispatch) => {
  try {
    console.log(" before liked Comment action");
    const { data } = await api.getAlllikedComment();
    console.log("liked Comment action", data);
    dispatch({ type: "FETCH_ALL_LIKED_COMMENTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletelikedComment = (likedCommentData) => async (dispatch) => {
  try {
    const { CommentId, Viewer } = likedCommentData;
    await api.deletelikedComment(CommentId, Viewer);
    console.log(`deleted ${likedCommentData}`);
    dispatch(getAlllikedComment());
  } catch (error) {
    console.log(error);
  }
};
