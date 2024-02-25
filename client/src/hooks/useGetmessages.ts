import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ConversationContext, ConversationContextType } from "../context/ConversationContext";
import { MessagesContext, MessagesContextType } from "../context/MessagesContext";

const useGetMessages = () => {
    const [loading, setIsLoading] = useState(false);
    const {selectedConversation} = useContext<ConversationContextType | null>(ConversationContext)!;
    const {messages, setMessages} = useContext<MessagesContextType | null>(MessagesContext)!;

    const getMessages = async() => {
        setIsLoading(true);

        try {
            const response = await fetch(`/api/messages/${selectedConversation?.id}`);
            const data = await response.json();
            setMessages(data.messages.messages);
            
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

    return { loading, messages, setMessages }
}

export default useGetMessages;