import { ReactNode, createContext, useState } from "react";

type Messages = {
    body : string,
    conversationId : Array<unknown>,
    createdAt : string,
    senderId : string,
    messsageId : string,
    receiverId : string
}[]

type MessagesContextType = {
    messages : Messages | null,
    setMessages : React.Dispatch<React.SetStateAction<Messages | null>>
}

type MessagesContextProviderProps = {
    children : ReactNode
}

export const MessagesContext = createContext<MessagesContextType | null>(null);

export const MessagesContextProvider = ({ children } : MessagesContextProviderProps) => {

    const [messages, setMessages] = useState<Messages | null>(null);

    return <MessagesContext.Provider value={{messages, setMessages}}>
        { children }
    </MessagesContext.Provider>
}