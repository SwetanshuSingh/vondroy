const UserChat = () => {
    return (
        <main className="bg-white px-4 py-5 w-96 h-[500px] rounded-lg flex flex-col">

            <div className="left w-full flex gap-2 border-b border-gray-300 pb-2">
                <div className="profile">
                    <img className="w-14 h-14 border border-gray-400 rounded-full box-border" src="https://avatar.iran.liara.run/public/girl?username=Jane" alt="avatar" />
                </div>
                <div className="text text-[#353535] flex flex-col justify-center gap">
                    <h3 className="text-sm font-semibold">Jane Doe</h3>
                    <p className="text-xs text-gray-400">Online</p>
                </div>
            </div>

            <div className="messages flex-grow"></div>

            <div className="w-full send-message flex gap-2">
                <input className="w-full border border-gray-400 outline-none rounded-md px-2 py-1" type="text" />
                <button className="border border-gray-600 rounded-md px-2">Send</button>
            </div>

        </main>
    )
}

export default UserChat;