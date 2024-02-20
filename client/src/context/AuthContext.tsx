import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)

    return <AuthContext.Provider value={{ auth, setAuthUser }}>
        { children }
    </AuthContext.Provider>
}