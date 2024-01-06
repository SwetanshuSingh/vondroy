import SigninForm from "../components/SigninForm";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <main className="bg-[#f4f3ee] font-mono w-full h-[100vh] flex flex-col gap-20 items-center justify-center">
      <div className="heading">
        <h1 className="text-5xl font-mono text-[#2b2d42] font-semibold">
          Welcome Back
        </h1>
      </div>
      <div className="form flex flex-col gap-5">
        <h1 className="text-3xl  text-[#2b2d42] font-semibold text-center">
          Sign In to Continue
        </h1>
        <SigninForm />
      </div>
      <h2 className="text-xl text-[#2b2d42] font-semibold">
        Not an Existing User?{" "}
        <Link to="/" replace className=" underline">
          Sign Up
        </Link>
      </h2>
    </main>
  );
}
