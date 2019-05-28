import { loginState, LOGIN, LOGOUT } from "./types";

//Login action
export function login(newLogin: loginState) {
  return {
    type: LOGIN,
    payload: newLogin
  };
}

//Logout action
export function logout(newLogout: loginState) {
  return {
    type: LOGOUT,
    payload: newLogout
  };
}
