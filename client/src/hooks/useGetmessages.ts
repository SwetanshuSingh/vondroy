import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ConversationContext } from "../context/ConversationContext";
import { MessagesContext } from "../context/MessagesContext";

const useGetMessages = () => {
    const [loading, setIsLoading] = useState(false);
    const {selectedConversation} = useContext(ConversationContext);
    const {messages, setMessages} = useContext(MessagesContext);

    const getMessages = async() => {
        setIsLoading(true);

        try {
            const response = await fetch(`/api/messages/${selectedConversation.id}`);
            const data = await response.json();
            setMessages(data.messages);
            
        } catch (error) {
            return toast.error("Internal Server Error")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if(selectedConversation?.id){
            getMessages()
        }
    }, [selectedConversation?.id])

    return { loading, messages }
}

export default useGetMessages;