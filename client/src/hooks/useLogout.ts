import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext, AuthContextType } from "../context/AuthContext";

const useLogout = () => {

    const { setAuthUser } = useContext<AuthContextType | null>(AuthContext)!;

    const logout = async() => {
        try {
            const res = await fetch("/api/auth/logout",);
            const data = await res.json();

            if(data.error){
                return toast.error("Failed to Logout")
            }
            
            localStorage.removeItem("chat-user");
            setAuthUser(null);
            return toast.success(data.message);

        } catch (error) {
            toast.error("Internal Server Error")
        }
    }

    return logout;
}

export default useLogout;