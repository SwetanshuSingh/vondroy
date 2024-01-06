import { useEffect, useState } from "react";

export default function Chatpage() {
  const [users, setUsers] = useState([]);
  // const [token, setToken] = useState([]);

  async function getUsers() {
    const authToken = await JSON.parse(localStorage.getItem('authorization'))
    const response = await fetch(`${import.meta.env.VITE_PROD_BACKEND_URL}/users`, {
      headers : {
        token : authToken
      }
    });
    const result = await response.json();
    const usersData = result.usernames;
    setUsers(usersData);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className="min-h-[100vh] w-full font-mono bg-[#c6edc3] flex flex-col gap-5 items-center py-10">
      <div className="heading text-center text-2xl font-semibold">
        <h1>Coming Soon!</h1>
        <h2>Total Users Registered : {users.length}</h2>
      </div>
      <div className="users">
        <ul className="text-lg list-disc">{users ? users.map((user) => {
            return (<li key={user}>{user}</li>)
        }) : (<h2>No Users Found</h2>)}</ul>
      </div>
    </main>
  );
}
