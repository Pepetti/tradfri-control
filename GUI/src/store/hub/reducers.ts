import {CONNECTED, CONNECT_ERR, hubState, hubActionTypes} from './types';

//Initial state
let initialState: hubState = {
    connected: false,
};

let persistentState = sessionStorage.getItem('state');
if (persistentState) {
    let tempState = JSON.parse(persistentState);
    initialState = tempState.hub;
}

export function hubReducer(
    state = initialState,
    action: hubActionTypes,
): hubState {
    switch (action.type) {
        case CONNECTED:
            return {
                ...state,
                ...action.payload,
            };
        case CONNECT_ERR:
            alert(
                'An error occurred while connecting to the gateway. Please try again.',
            );
            return {
                ...state,
                ...action.payload,
            };

        default:
            return {
                ...state,
            };
    }
}
