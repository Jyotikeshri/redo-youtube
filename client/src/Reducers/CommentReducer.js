const initialState = {
  data: [], // Initial state should be an empty array or an object with a similar structure to your actual comment data
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_COMMENT":
      return { ...state, data: [...state.data, action.payload] };

    case "EDIT_COMMENT":
      const editedComments = state.data.map((comment) =>
        comment.id === action.payload.id ? action.payload : comment
      );
      return { ...state, data: editedComments };

    case "FETCH_ALL_COMMENTS":
      return { ...state, data: action.payload };

    case "DISLIKE_COMMENT_REMOVE":
      const dislikedComments = state.data
        .map((comment) =>
          comment.id === action.payload && comment.dislikes + 1 >= 2
            ? null
            : comment
        )
        .filter(Boolean);
      // If a comment has reached 2 dislikes, it will be filtered out
      return { ...state, data: dislikedComments };

    default:
      return state;
  }
};

export default commentReducer;
