import { useContext, useState } from "react";
import useSendMessage from "../hooks/useSendMessage";
import { MessagesContext } from "../context/MessagesContext";
import useGetMessages from "../hooks/useGetmessages";
import MessageScreen from "./MessageScreen";

const UserMessages = () : React.JSX.Element => {

    const [message, setUserMessage] = useState('');
    const {loading, sendMessage} = useSendMessage();
    
    const handleChange = (evt) => {
        setUserMessage(evt.target.value)
    }

    const handleSubmit = async() => {
        if(!message){
            return
        }
        await sendMessage(message)
        setUserMessage('');
    }

    return (
        <>
        
          <MessageScreen />
          <div className="w-full send-message flex gap-2">
            <input
              className="w-full border border-gray-400 outline-none rounded-md px-2 py-1"
              type="text"
              value={message}
              onChange={(evt) => {handleChange(evt)}}
            />
            <button onClick={handleSubmit} className="border border-gray-600 rounded-md px-2">
              Send
            </button>
          </div>
          </>
    )
}

export default UserMessages;