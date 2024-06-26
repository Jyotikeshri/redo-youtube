import * as api from "../api/api.js";

export const addToHistory = (HistoryData) => async (dispatch) => {
  try {
    console.log("history action data", HistoryData);
    const { data } = await api.addToHistory(HistoryData);
    console.log("history action data after", data);
    dispatch({ type: "POST_HISTORY", data });
    dispatch(getAllHistory());
  } catch (error) {
    console.log(error);
  }
};

export const getAllHistory = () => async (dispatch) => {
  try {
    const { data } = await api.getAllHistory();
    console.log(data);
    dispatch({ type: "FETCH_ALL_HISTORY_VIDEOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clearHistory = (HistoryData) => async (dispatch) => {
  try {
    const { userId } = HistoryData;
    await api.deleteHistory(userId);
    dispatch(getAllHistory());
  } catch (error) {
    console.log(error);
  }
};
