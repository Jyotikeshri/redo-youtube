const likedCommentReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "POST_LIKE_COMMENT":
      return { ...state };

    case "POST_LIKED_COMMENT":
      return { ...state, data: action?.data };
    case "FETCH_ALL_LIKED__COMMENTS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default likedCommentReducer;
