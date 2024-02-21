import useGetMessages from "../hooks/useGetmessages";

const MessageScreen = (): React.JSX.Element => {
  const { messages } = useGetMessages();
  const conversationMessages = messages?.messages;

  return (
    <div className="messages flex flex-col gap-3 flex-grow p-3 overflow-y-scroll">
      {conversationMessages ? (
        conversationMessages.map((message) => {
          return (
            <div className="message flex justify-start gap-2">
            <img
              className="w-8 h-8 border border-gray-400 rounded-full box-border"
              src="https://avatar.iran.liara.run/public/boy?username=Swetanshu"
              alt="avatar"
            />
            <div className="bg-gray-100 mt-2 w-fit max-w-[70%] h-auto text-sm p-2 flex justify-center items-center flex-wrap rounded-r-md rounded-bl-md">
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
