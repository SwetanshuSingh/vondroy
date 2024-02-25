import { ReactNode, createContext, useContext, useState } from "react";

type Auth = {
    email : string,
    firstname : string,
    id : string,
    lastname : string,
    profile : string,
    username : string
}

type AuthContextType = {
    auth : Auth,
    setAuthUser : React.Dispatch<React.SetStateAction<Auth>>
}

type AuthContextProviderProps = {
    children : ReactNode
}

export const AuthContext = createContext<AuthContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children } : AuthContextProviderProps) => {
    const [auth, setAuthUser] = useState<Auth>(JSON.parse(localStorage.getItem("chat-user")!) || null)

    return <AuthContext.Provider value={{ auth, setAuthUser }}>
        { children }
    </AuthContext.Provider>
}