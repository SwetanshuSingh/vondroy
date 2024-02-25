import { useContext, useState } from "react";
import toast from "react-hot-toast";
import zod from "zod";
import { AuthContext, AuthContextType } from "../context/AuthContext";

interface FormData {
    [key : string] : string
  }

const userLoginSchema = zod.object({
    username: zod.string(),
    password: zod.string().min(6),
    email: zod.string().email(),
})

const useLogin = () => {
    const [loading, setIsLoading] = useState(false);
    const { setAuthUser } = useContext<AuthContextType | null>(AuthContext)!;
    
    const login = async (formData : FormData) => {
        const { success } = userLoginSchema.safeParse(formData);
     if(!success){
        return toast.error("Invalid Form Details");
     }

     setIsLoading(true);

     try {
        const response = await fetch("/api/auth/login", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(formData)
        })

        const data = await response.json();

        if(response.status !== 200){
            return toast.error(data.message);
        }

        localStorage.setItem("chat-user", JSON.stringify(data.credentials))
        setAuthUser(data.credentials)
        return toast.success(data.message);

     } catch (error) {
        toast.error("Internal Server Error");
     } finally {
        setIsLoading(false);
     }
    }

    return { loading, login }
}

export default useLogin;    