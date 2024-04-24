const DislikedCommentReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "POST_DISLIKE_COMMENT":
      return { ...state };

    case "POST_DISLIKED_COMMENT":
      return { ...state, data: action?.data };
    case "FETCH_ALL_DISLIKED__COMMENTS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default DislikedCommentReducer;
