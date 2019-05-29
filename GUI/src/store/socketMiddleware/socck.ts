import socketIO from "socket.io-client";

export const createStore = (url: string, channelName = "action") => (
  store: any
) => {
  const socket = socketIO.connect(url);

  socket.on(channelName, store.dispatch);

  return (next: any) => (action: any) =>{
      if(action.meta){
          socket.emit(channelName, action)
      }
      return next(action);
  }
};
