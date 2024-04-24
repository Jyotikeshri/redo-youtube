import * as api from "../api/api.js";
import { setCurrentUser } from "./CurrentUser.js";

export const login = (authData) => async (dispatch) => {
  try {
    const response = await api.login(authData);

    // Assuming response contains the JWT token and user data
    const { token, result } = response.data;

    // Save token to local storage
    localStorage.setItem("token", token);

    // Dispatch actions to update Redux state
    dispatch({ type: "AUTH", data: { result, token } });
    dispatch(setCurrentUser(result));
  } catch (error) {
    console.error("Error in login action:", error);
    alert(error);
  }
};
