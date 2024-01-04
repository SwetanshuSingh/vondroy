import { Link } from "react-router-dom";
import SignupForm from "../components/SignUpForm";

export default function Signup(){
    return (
        <main className="bg-[#6f4e37] font-mono w-full h-[100vh] flex flex-col gap-20 items-center justify-center">
            <div className="heading">
                <h1 className="text-5xl font-mono text-[#fffceb] font-semibold">Welcome to Meow Chat</h1>
                
            </div>
            <div className="form flex flex-col gap-5">
            <h1 className="text-3xl  text-[#fffceb] font-semibold text-center">Sign Up to Continue</h1>
            <SignupForm />
            </div>
            <h2 className="text-lg text-[#fffceb] font-semibold">Already an existing user? <Link to="/signin" replace className=" underline">Sign In</Link></h2>
        </main>
    )
}