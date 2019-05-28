//Describe the login state slice
export interface loginState {
  loggedin: boolean;
  user: {
    userName: string;
    loggedinAt: number | null;
    loggedOutAt: number | null;
  };
}

//Action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

//Login interface
interface login {
  type: typeof LOGIN;
  payload: loginState;
}

//Logout interface
interface logout {
  type: typeof LOGOUT;
  payload: loginState;
}

export type loginActionTypes = login | logout;
