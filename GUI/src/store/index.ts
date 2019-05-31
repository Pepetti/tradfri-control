import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createSocketMiddleware} from './socketMiddleware/socketMiddleware';

import {loginReducer} from './login/reducers';
import {hubReducer} from './hub/reducers';

//rootReducer that combines all reducers
const rootReducer = combineReducers({
    logged: loginReducer,
    hub: hubReducer,
});

//Export AppState typeof rootReducer
export type AppState = ReturnType<typeof rootReducer>;

//Function to configure the store
export default function configureStore() {
    //Middlewares
    const socketMiddleware = createSocketMiddleware('http://192.168.1.81:8000');
    const middlewares = [socketMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    //Create the store with middlewares
    const store = createStore(
        rootReducer,
        composeWithDevTools(middlewareEnhancer),
    );

    store.subscribe(() => {
        sessionStorage.setItem('state', JSON.stringify(store.getState()));
    });

    return store;
}
