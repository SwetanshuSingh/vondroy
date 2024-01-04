import SigninForm from "../components/SigninForm";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <main className="bg-[#6f4e37] font-mono w-full h-[100vh] flex flex-col gap-20 items-center justify-center">
      <div className="heading">
        <h1 className="text-5xl font-mono text-[#fffceb] font-semibold">
          Welcome Back
        </h1>
      </div>
      <div className="form flex flex-col gap-5">
        <h1 className="text-3xl  text-[#fffceb] font-semibold text-center">
          Sign In to Continue
        </h1>
        <SigninForm />
      </div>
      <h2 className="text-xl text-[#fffceb] font-semibold">
        Not an Existing User?{" "}
        <Link to="/signup" replace className=" underline">
          Sign Up
        </Link>
      </h2>
    </main>
  );
}
