import * as api from "../api/api.js";

export const addToDislikedComment =
  (DislikedCommentData) => async (dispatch) => {
    try {
      const { data } = await api.addToDislikedComment(DislikedCommentData);
      console.log("Added to DisLikedComment", data);
      dispatch({ type: "POST_DISLIKED_COMMENT", data });
      dispatch(getAllDislikedComment());
    } catch (error) {
      console.log(error);
    }
  };

export const getAllDislikedComment = () => async (dispatch) => {
  try {
    console.log(" before disliked Comment action");
    const { data } = await api.getAllDislikedComment();
    console.log("disliked Comment action", data);
    dispatch({ type: "FETCH_ALL_DISLIKED_COMMENTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDislikedComment =
  (DislikedCommentData) => async (dispatch) => {
    try {
      const { CommentId, Viewer } = DislikedCommentData;
      await api.deleteDislikedComment(CommentId, Viewer);
      console.log(`deleted ${(CommentId, Viewer)}`);
      dispatch(getAllDislikedComment());
    } catch (error) {
      console.log(error);
    }
  };
