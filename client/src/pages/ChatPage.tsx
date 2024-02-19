import UsersDashboard from "../components/ui/UsersDashboard";

const ChatPage = () : React.JSX.Element => {
    return (
        <div className="bg-[#e8ebed] w-full h-[100vh] flex flex-col gap-3 justify-center items-center">
            <UsersDashboard />
        </div>
    )
}

export default ChatPage;