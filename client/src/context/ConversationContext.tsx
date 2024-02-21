import { createContext, useState } from "react";

export const ConversationContext = createContext();

export const ConversationContextProvider = ({ children }) => {

    const [selectedConversation, setSelectedConversation] = useState();

    return <ConversationContext.Provider value={{selectedConversation, setSelectedConversation}}>
        { children }
    </ConversationContext.Provider>
}