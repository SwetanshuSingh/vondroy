import { useContext, useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useGetMessages from "./useGetmessages";
import { MessagesContext } from "../context/MessagesContext";

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const { messages, setMessages } = useContext(MessagesContext);

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage");
    }, [socket,setMessages,messages])
}

export default useListenMessages;