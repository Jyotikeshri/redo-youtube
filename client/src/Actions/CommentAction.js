import * as api from "../api/api.js";

export const editComment = (CommentData) => async (dispatch) => {
  try {
    console.log("comment edit data before", CommentData);
    const { id, commentBody } = CommentData;
    const { data } = await api.editComment(id, commentBody);
    console.log("comment edit data", data);
    dispatch({ type: "EDIT_COMMENT", payload: data });
    dispatch(getAllComment());
  } catch (error) {
    console.log(error);
  }
};
export const postComment = (CommentData) => async (dispatch) => {
  try {
    console.log("before post comment action", CommentData);
    const { data } = await api.postComment(CommentData);
    console.log("comment data", CommentData);
    dispatch({ type: "POST_COMMENT", payload: data });
    dispatch(getAllComment());
  } catch (error) {
    console.log(error);
  }
};

export const getAllComment = () => async (dispatch) => {
  try {
    console.log("all comments");
    const { data } = await api.getAllComment();
    console.log("all comments", data);
    dispatch({ type: "FETCH_ALL_COMMENTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = (id) => async (dispatch) => {
  try {
    console.log(id);
    await api.deleteComment(id);
    dispatch(getAllComment());
  } catch (error) {
    console.log(error);
  }
};

export const likeComment = (LikeDate) => async (dispatch) => {
  try {
    const { id, Like } = LikeDate;
    console.log("like comment action before ", LikeDate);
    const { data } = await api.likeComment(id, Like);
    console.log("like video action aftet", data);
    dispatch({ type: "POST_LIKE_COMMENT", payload: data });
    dispatch(getAllComment());
  } catch (error) {
    console.log(error);
  }
};

export const DislikeComment = (LikeDate) => async (dispatch) => {
  try {
    const { id, Dislike } = LikeDate;
    console.log("dislike comment action before ", LikeDate);
    const { data } = await api.DislikeComment(id, Dislike);
    console.log("dislike video action aftet", data);
    dispatch({ type: "POST_DISLIKE_COMMENT", payload: data });
    dispatch(getAllComment());
  } catch (error) {
    console.log(error);
  }
};
