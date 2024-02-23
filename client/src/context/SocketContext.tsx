import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) => {

    const [socket, setSocket] = useState();
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {auth} = useAuthContext();

    useEffect(() => {
        if(auth) {
            const socket = io("http://localhost:5000", {
                query : {
                    userId : auth.id,
                }
            });
            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    },[auth])

    return <SocketContext.Provider value={{socket, onlineUsers}}>
        {children}
    </SocketContext.Provider>
}