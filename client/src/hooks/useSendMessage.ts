import { useContext, useState } from "react";
import { MessagesContext } from "../context/MessagesContext";
import toast from "react-hot-toast";
import { ConversationContext } from "../context/ConversationContext";

const useSendMessage = () => {
    const [loading, setIsLoading] = useState(false);
    const {messages, setMessages} = useContext(MessagesContext);
    const { selectedConversation } = useContext(ConversationContext);

    const sendMessage = async(message) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/messages/send/${selectedConversation.id}`, {
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
            setMessages({messages : data.messages})

        } catch (error) {
            console.log(error);
            toast.error("Internal Server Error");
        } finally{
            setIsLoading(false);
        }
    }
    return {loading, sendMessage};
}

export default useSendMessage;