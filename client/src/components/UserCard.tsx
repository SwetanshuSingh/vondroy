import { useContext } from "react";
import { ConversationContext } from "../context/ConversationContext";

const UserCard = ({ userDetails }) : React.JSX.Element => {

    const {selectedConversation, setSelectedConversation} = useContext(ConversationContext);
    const isSelected = selectedConversation?.id === userDetails.id

    return (
        <main onClick={() => {setSelectedConversation(userDetails)}} className={`${isSelected ? "bg-gray-200" : ""} p-2 w-72 font-0 flex border border-gray-500 rounded-lg justify-between cursor-default hover:bg-gray-200`}>
            <div className="left flex gap-2">
                <div className="profile">
                    <img className="w-14 h-14 border border-gray-400 rounded-full box-border" src={userDetails.profilePic} alt="avatar" />
                </div>
                <div className="text text-[#353535] flex flex-col justify-center gap-2">
                    <h3 className="text-sm">{ userDetails.firstname }</h3>
                    <p className="text-xs text-gray-400">Brooo</p>
                </div>
            </div>
            <div className="right">
                <h3 className="text-xs capitalize text-gray-400">Just Now</h3>
            </div>
        </main>
    )
}

export default UserCard;