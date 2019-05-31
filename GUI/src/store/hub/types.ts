//Describe hub slice of state
export interface hubState {
    connected: boolean;
}

//Interface for hub information
export interface hubInfo {
    hubip: string;
    hubkey: string;
    identity: string;
}

//Action types
export const CONNECT = 'CONNECT';
export const DISCONNECT = 'DISCONNECT';
export const CONNECTED = 'CONNECTED';

//Connect interface
interface connect {
    type: typeof CONNECT;
    payload: hubInfo;
}

//Connected interface
interface connected {
    type: typeof CONNECTED;
    payload: hubState;
}

export type hubActionTypes = connected;
