import * as api from "../api/api.js";

export const fetchAllChannel = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllChannel();

    dispatch({ type: "FETCH_CHANNELS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateChannelData = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateChannel(id, updateData);

    dispatch({ type: "UPDATE_DATA", payload: data });
  } catch (error) {
    console.log("error in actions channel", error);
  }
};
