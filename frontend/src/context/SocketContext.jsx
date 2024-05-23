import { createContext, useState,useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import React, { useEffect } from "react";
const  SocketContext = createContext();
export const useSocketContext = () => {
    return useContext(SocketContext);
};


export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);
    const { authUser} = useAuthContext();
    useEffect(() => {
        if(authUser)
            {
                const socket = io("https://chat-app-d1fn.onrender.com/",{
                    query:{
                        userId: authUser._id
                    }
                });
                setSocket(socket);
                // socket.on() is used to listen to the events , can be used both client and server side
                socket.on("getOnlineUsers",(users)=>{
                    setOnlineUser(users);
                })
                return () => {
                    socket.close();
                }
            }
            else{
                if(socket)
                    {
                        socket.close();
                        setSocket(null);
                    }
            }


    },[authUser])
  return (
    <SocketContext.Provider value={{socket, onlineUser}}>
      {children}
    </SocketContext.Provider>
  );
};
