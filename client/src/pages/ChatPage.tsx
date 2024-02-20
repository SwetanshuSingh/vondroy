import UserChat from "../components/UserChat";
import UsersDashboard from "../components/ui/UsersDashboard";

const ChatPage = () : React.JSX.Element => {
    return (
        <div className="bg-[#e8ebed] w-full h-[100vh] flex gap-3 justify-center items-center">
            <UsersDashboard />
            <UserChat />
        </div>
    )
}

export default ChatPage;