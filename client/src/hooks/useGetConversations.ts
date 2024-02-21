import { useContext, useEffect, useState } from "react";
import { ConversationsContext } from "../context/ConversationsContext";
import toast from "react-hot-toast";

const useGetConversation = () => {
    const [loading, setIsLoading] = useState(false);
    const { conversations, setConversations } = useContext(ConversationsContext);

    useEffect(() => {
        const fetchConversation = async() => {
            setIsLoading(true)
            
            try {
                const response = await fetch("/api/users")
                const conversations = await response.json();
                setConversations(conversations.message);
            } catch (error) {
                toast.error("Internal Server Eroor")
            } finally{
                setIsLoading(false)
            }
        }
        fetchConversation();
    }, [])
    return { loading, conversations };
}

export default useGetConversation;