import { createContext, useState } from "react";

export const ConversationsContext = createContext();

export const ConversationsContextProvider = ({ children }) => {
    const [conversations, setConversations] = useState();

    return <ConversationsContext.Provider value = {{conversations, setConversations}}>
        { children }
    </ConversationsContext.Provider>
}