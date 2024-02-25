import { ReactNode, createContext, useState } from "react";

export type Users = {
    email : string,
    firstname : string,
    lastname : string,
    id : string,
    profilePic : string,
    username : string
}[]

export type UsersContextType = {
    users : Users | null,
    setUsers : React.Dispatch<React.SetStateAction<Users | null>>
}

type UsersContextProviderProps = {
    children : ReactNode
}

export const UsersContext = createContext<UsersContextType | null>(null);

export const UsersContextProvider = ({ children } : UsersContextProviderProps) => {
    const [users, setUsers] = useState<Users | null>(null);

    return <UsersContext.Provider value = {{users, setUsers}}>
        { children }
    </UsersContext.Provider>
}