const chanelReducers = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return state.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    case "FETCH_CHANNELS":
      return action.payload;
    default:
      return state;
  }
};
export default chanelReducers;
