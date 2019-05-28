import { LOGOUT, LOGIN, loginState, loginActionTypes } from "./types";

//Initial state
let initialState: loginState = {
  loggedin: false,
  user: {
    userName: "",
    loggedinAt: null,
    loggedOutAt: null
  }
};

let persistentState = sessionStorage.getItem('state');
if(persistentState){
  let tempState = JSON.parse(persistentState);
  initialState = tempState.logged;
}

export function loginReducer(
  state = initialState,
  action: loginActionTypes
): loginState {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.payload
      };
    case LOGOUT:
      return {
        ...action.payload
      };
    default:
      return {
        ...state
      };
  }
}
