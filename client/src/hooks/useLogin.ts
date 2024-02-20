import { useState } from "react";
import toast from "react-hot-toast";
import zod from "zod";

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
    
    const login = async (formData : FormData) => {
        const { success } = userLoginSchema.safeParse(formData);
     if(!success){
        return toast.error("Invalid Form Details");
     }

     setIsLoading(true);

     try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(formData)
        })

        const data = await response.json();

        if(response.status !== 200){
            return toast.error(data.message);
        }

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