import { Route, Routes } from "react-router-dom";
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chatpage from "./pages/ChatPage";

export default function HomePage(){
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/chat" element={<Chatpage />} />
    </Routes>
  )
}