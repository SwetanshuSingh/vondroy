import { useContext, useEffect, useRef } from "react";
import useGetMessages from "../hooks/useGetmessages";
import { AuthContext } from "../context/AuthContext";
import { ConversationContext } from "../context/ConversationContext";

const MessageScreen = (): React.JSX.Element => {

  const { messages } = useGetMessages();
  const {  auth } = useContext(AuthContext);
  const { selectedConversation } = useContext(ConversationContext);
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"})
    }, 100);
  }, [messages])
  
  const conversationMessages = messages?.messages;

  return (
    <div className="messages flex flex-col gap-3 flex-grow p-3 overflow-y-scroll">
      {conversationMessages ? (
        conversationMessages.map((message) => {
          const fromMe = auth.id === message.senderId
          const chatClassname = fromMe ? 'flex-row-reverse' : 'flex-row';
          const borderClassname = fromMe ? 'rounded-l-md rounded-br-md' : 'rounded-r-md rounded-bl-md';
          const profilePic = fromMe ? auth.profile : selectedConversation.profilePic;

          return (
            <div key={message.id} ref={lastMessageRef} className={`${chatClassname} message flex justify-start gap-2`}>
            <img
              className="w-8 h-8 border border-gray-400 rounded-full box-border"
              src={profilePic}
              alt="avatar"
            />
            <div className={`${borderClassname} bg-gray-100 mt-2 w-fit max-w-[70%] h-auto text-sm p-2 flex justify-center items-center flex-wrap`}>
              {message.body}
            </div>
          </div>
          );
        })
      ) : (
        <p>hii</p>
      )}
    </div>
  );
};

export default MessageScreen;
