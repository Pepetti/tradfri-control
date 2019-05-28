import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { loginReducer } from "./login/reducers";

//rootReducer that combines all reducers
const rootReducer = combineReducers({
  logged: loginReducer
});

//Export AppState typeof rootReducer
export type AppState = ReturnType<typeof rootReducer>;

//Function to configure the store
export default function configureStore() {
  //Middlewares
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  //Create the store with middlewares
  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  );

  store.subscribe(() => {
    sessionStorage.setItem("state", JSON.stringify(store.getState()));
  });
  
  return store;
}
