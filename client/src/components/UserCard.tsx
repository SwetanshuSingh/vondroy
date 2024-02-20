const UserCard = () : React.JSX.Element => {
    return (
        <main className="p-2 w-72 font-0 flex border border-gray-500 rounded-lg justify-between cursor-default">
            <div className="left flex gap-2">
                <div className="profile">
                    <img className="w-14 h-14 border border-gray-400 rounded-full box-border" src="https://avatar.iran.liara.run/public/boy?username=Swetanshu" alt="avatar" />
                </div>
                <div className="text text-[#353535] flex flex-col justify-center gap-2">
                    <h3 className="text-sm">Swetanshu</h3>
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