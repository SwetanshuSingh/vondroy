import { useContext, useState } from "react";
import { MessagesContext, MessagesContextType } from "../context/MessagesContext";
import toast from "react-hot-toast";
import { ConversationContext, ConversationContextType } from "../context/ConversationContext";

const useSendMessage = () => {
    const [loading, setIsLoading] = useState(false);
    const {setMessages} = useContext<MessagesContextType | null>(MessagesContext)!;
    const { selectedConversation } = useContext<ConversationContextType | null>(ConversationContext)!;

    const sendMessage = async(message : string) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/messages/send/${selectedConversation?.id}`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({message : message})
            })

            const data = await response.json();
            if(data.error){
                return toast.error("Cannot send message")
            }
            setMessages(data.messages)

        } catch (error) {
            toast.error("Internal Server Error");
        } finally{
            setIsLoading(false);
        }
    }
    return {loading, sendMessage};
}

export default useSendMessage;