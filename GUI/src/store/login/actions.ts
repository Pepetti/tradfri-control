import { loginState, LOGIN_ATTEMPT, LOGIN, LOGOUT } from "./types";

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

export function attemptLogin(userName: string) {
  return {
    type: LOGIN_ATTEMPT,
    payload: userName,
    meta: {
      remote: true
    }
  };
}
