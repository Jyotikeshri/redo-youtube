import * as api from "../api/api.js";

export const fetchAllChannel = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllChannel();

    console.log("channel user action", data);

    dispatch({ type: "FETCH_CHANNELS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateChannelData = (id, updateData) => async (dispatch) => {
  console.log(`updateChannelData action`);
  try {
    const { data } = await api.updateChannel(id, updateData);
    console.log("data in updateChannelData", data);
    dispatch({ type: "UPDATE_DATA", payload: data });
  } catch (error) {
    console.log("error in actions channel", error);
  }
};
