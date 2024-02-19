import UserCard from "../UserCard";

const UsersDashboard = () : React.JSX.Element => {
    return (
        <main className="bg-white rounded-lg flex flex-col justify-start items-start gap-4 px-4 py-5 h-[500px] w-fit">
            <h2 className="font-0 font-medium text-xl text-[#353535]">Message</h2>
            <div className="users flex flex-col gap-2 overflow-y-scroll">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
        </main>
    )
}

export default UsersDashboard;