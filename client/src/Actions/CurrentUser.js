export const setCurrentUser = (data) => {
  console.log("data", data);
  return {
    type: "FETCH_CURRENT_USER",
    payload: data,
  };
};
