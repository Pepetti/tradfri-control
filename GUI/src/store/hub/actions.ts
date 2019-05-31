import {hubState, hubInfo, CONNECT, CONNECTED} from './types';

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
