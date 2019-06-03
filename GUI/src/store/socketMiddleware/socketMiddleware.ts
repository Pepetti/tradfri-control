import socketIO from 'socket.io-client';
import {Dispatch} from 'redux';

//Custom socket middleware for socket actions
export const createSocketMiddleware = (url: string, channelName = 'action') => (
    store: any,
) => {
    const socket = socketIO.connect(url);

    //When socket receives 'action' it dispatches the payload received.
    //The action payload MUST contain a "type" field in the payload and the TYPE
    //must be one of the actions described in action types
    socket.on(channelName, store.dispatch);

    //If a dispatched action contains a meta field with a remote tag
    //set to true, we emit the action to the socket
    //Action is set as "any" type because to be honest i don't really know
    //what i should set it to at this point in time. This will be changed after more
    //research on the subject
    return (next: Dispatch) => (action: any) => {
        if (action.meta && action.meta.remote) {
            socket.emit(channelName, action);
        }
        return next(action);
    };
};
