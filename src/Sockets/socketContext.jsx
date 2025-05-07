import { io } from "socket.io-client";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "@/utils/constants";
import { addNewListToBoard, addNewMessage } from "@/Redux/BoardsSlice/BoardsSlice";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const user = useSelector((store) => store.user);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [targetUserId, setTargetUserId] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    socket?.on("getOnlineUsers", (onlineUsers) => {
      console.log(onlineUsers, "onlineUsers");
      setOnlineUsers(onlineUsers);
    });

    socket?.on("getOnlineUsers", (onlineUsers) => {
      setOnlineUsers(onlineUsers);
    });

    return () => socket?.disconnect();
  }, [socket]);

  const connectSocket = (userId) => {
    if (socket?.connected) {
      return;
    }

    const handleSocket = () => {
      if (location.hostname == "localhost") {
        return io(BASE_URL);
      } else {
        return io("/", {
          path: "/api/socket.io",
          query: { userId: userId },
        });
      }
    };
    const tempSocket = handleSocket();
    tempSocket.connect();
    setSocket(tempSocket);
  };

  //====================================================Messages Handler====================================================
  useEffect(() => {
    const handleMessage = (msg) => {
      console.log(user?._id, msg.senderId._id);
      if(user?._id != msg.senderId._id)
      dispatch(addNewMessage(msg));
    };
    
    //HANDLER OF RECEIVE MESSAE HANDLER
    socket?.on("messageReceived", handleMessage);
    //Message in case of error

    // =====================New List added
    socket?.on("list-added", (data) => {
      if (data.newList.user_id != user?._id) {
        dispatch(addNewListToBoard(data.newList));
      }
    });

    //DON'T FORGET TO REMOVE THE LISTENER
    return () => {
      socket?.off("messageReceived", handleMessage);
    };
  });

  const disconnectSocket = () => {
    socket?.disconnect();
    setSocket(null);
  };
  return (
    <SocketContext.Provider
      value={{
        socket,
        connectSocket,
        disconnectSocket,
        userId: user?._id || null,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
