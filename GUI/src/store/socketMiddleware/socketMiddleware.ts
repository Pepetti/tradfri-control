import socketIO from "socket.io-client";
import { Dispatch } from "redux";

export const createSocketMiddleware = (url: string, channelName = "action") => (
  store: any
) => {
  const socket = socketIO.connect(url);

  socket.on(channelName, store.dispatch);

  return (next: Dispatch) => (action: any) => {
    if (action.meta && action.meta.remote) {
      socket.emit(channelName, action);
    }
    return next(action);
  };
};
