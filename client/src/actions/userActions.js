import axios from "axios";
export const VALIDATE_USER = "users:validateUser";
export const LOGOUT_USER = "users:logoutuser";

export function validateUserDetails() {
  return dispatch => {
    return axios.get("/api/session").then(user => {
      dispatch({
        type: VALIDATE_USER,
        payload: user.data
      });
      return user;
    });
  };
}

export function loginUser(email, password) {
  return dispatch => {
    return axios
      .post("/user/login", { email, password })
      .then(user => {
        dispatch({
          type: VALIDATE_USER,
          payload: user.data
        });
      })
      .catch(err => {
        throw new Error(err.response.data.message);
      });
  };
}

export function logoutUser() {
  return dispatch => {
    return axios
      .get("/user/logout")
      .then(user => {
        dispatch({
          type: LOGOUT_USER,
          payload: user.data
        });
      })
      .catch(err => {
        console.log("Error Log Out. Please Try Again.", err);
      });
  };
}
