import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:8080/` });
// const API = axios.create({
//   baseURL: `https://youtubeclone5031.herokuapp.com/`,
// });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const login = (authData) => {
  console.log("AuthData  login:", authData);

  return API.post("/user/login", authData);
};
