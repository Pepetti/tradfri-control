import {hubState, hubInfo, CONNECT, CONNECTED, CONNECT_ERR} from './types';

//Connect action
export function connectHub(hubinfo: hubInfo) {
    return {
        type: CONNECT,
        payload: hubinfo,
        meta: {
            remote: true,
        },
    };
}

//Connected action
export function connected(newConnected: hubState) {
    return {
        type: CONNECTED,
        payload: newConnected,
    };
}

//Connect error action
export function connect_err(newError: hubState) {
    return {
        type: CONNECT_ERR,
        payload: newError,
    };
}
