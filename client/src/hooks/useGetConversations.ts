import { useContext, useEffect, useState } from "react";
import { UsersContext, UsersContextType } from "../context/UsersContext";
import toast from "react-hot-toast";

const useGetConversation = () => {
    const [loading, setIsLoading] = useState(false);
    const { users, setUsers } = useContext<UsersContextType | null>(UsersContext)!;

    useEffect(() => {
        const fetchConversation = async() => {
            setIsLoading(true)
            
            try {
                const response = await fetch("/api/users")
                const conversations = await response.json();
                setUsers(conversations.message);
            } catch (error) {
                toast.error("Internal Server Eroor")
            } finally{
                setIsLoading(false)
            }
        }
        fetchConversation();
    }, [])
    return { loading, users };
}

export default useGetConversation;