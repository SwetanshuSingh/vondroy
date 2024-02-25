import { ReactNode, createContext, useState } from "react";

type SelectedConversation = {
    email : string,
    firstname : string,
    lastname : string,
    id : string,
    profilePic : string,
    username : string
}

export type ConversationContextType = {
    selectedConversation : SelectedConversation | null,
    setSelectedConversation : React.Dispatch<React.SetStateAction<SelectedConversation | null>>
}

type ConversationContextProviderProps = {
    children : ReactNode
}

export const ConversationContext = createContext<ConversationContextType | null>(null);

export const ConversationContextProvider = ({ children } : ConversationContextProviderProps) => {

    const [selectedConversation, setSelectedConversation] = useState<SelectedConversation | null>(null);

    return <ConversationContext.Provider value={{selectedConversation, setSelectedConversation}}>
        { children }
    </ConversationContext.Provider>
}