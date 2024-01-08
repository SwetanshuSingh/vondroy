import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

export default function Signup(){
    return (
        <main className="bg-[#f4f3ee] font-mono w-full h-[100vh] flex flex-col gap-20 items-center justify-center">
            <div className="heading">
                <h1 className="text-5xl text-center font-mono text-[#2b2d42] font-semibold">Welcome to Conversify</h1>
                
            </div>
            <div className="form flex flex-col gap-5">
            <h1 className="text-3xl  text-[#2b2d42] font-semibold text-center">Sign Up to Continue</h1>
            <SignupForm />
            </div>
            <h2 className="text-lg text-[#2b2d42] font-semibold">Already an existing user? <Link to="/signin" replace className=" underline">Sign In</Link></h2>
        </main>
    )
}