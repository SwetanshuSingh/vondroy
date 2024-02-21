import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
    const [users, setUsers] = useState();

    return <UsersContext.Provider value = {{users, setUsers}}>
        { children }
    </UsersContext.Provider>
}