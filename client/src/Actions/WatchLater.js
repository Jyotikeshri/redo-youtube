import * as api from "../api/api.js";

export const addTowatchLater = (watchLaterData) => async (dispatch) => {
  try {
    console.log("watchLaterData", watchLaterData);
    const response = await api.addTowatchLater(watchLaterData);

    if (response && response.data) {
      dispatch({ type: "POST_WATCHLATER", data: response.data });
      dispatch(getAllwatchLater());
    } else {
      console.log(
        "Failed to add to watch later: Response or response.data is undefined."
      );
    }
  } catch (error) {
    console.log("Error in adding to watch later: ", error);
  }
};

export const getAllwatchLater = () => async (dispatch) => {
  try {
    const response = await api.getAllwatchLater(); // Assuming this returns a promise
    const data = response.data; // Assuming the data is in response.data
    console.log("data", data);
    dispatch({ type: "FETCH_ALL_WATCHLATER_VIDEOS", payload: data });
  } catch (error) {
    console.log("error in get all watch later", error);
  }
};

export const deleteWatchLater = (watchLaterData) => async (dispatch) => {
  try {
    const { videoId, Viewer } = watchLaterData;
    await api.deleteWatchLater(videoId, Viewer);
    dispatch(getAllwatchLater());
  } catch (error) {
    console.log(error);
  }
};
