import { Route, Routes } from "react-router-dom";
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";

export default function HomePage(){
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}