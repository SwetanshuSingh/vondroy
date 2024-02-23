import { useContext, useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { MessagesContext } from "../context/MessagesContext";
import notificationSound from "../assets/sounds/notification.mp3"

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const { messages, setMessages } = useContext(MessagesContext);

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage");
    }, [socket,setMessages,messages])
}

export default useListenMessages;