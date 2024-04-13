import * as api from "../api/api.js";
import { setCurrentUser } from "./CurrentUser.js";

export const login = (authData) => async (dispatch) => {
  try {
    console.log("authData", authData);
    const { data } = await api.login(authData);
    console.log("data auth", data);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  } catch (error) {
    alert(error);
  }
};
