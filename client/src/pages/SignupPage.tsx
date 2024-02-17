import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const SignupPage = (): React.JSX.Element => {
  return (
    <main className="w-full h-[100vh] bg-[#e8ebed] flex justify-center items-center">

      <section className="bg-white p-8 rounded-lg flex flex-col gap-8">

        <div className="heading font-0 text-[#353535] flex flex-col gap-2">
          <img className="w-12 h-12" src="/logos/conversify-logo.png" alt="logo" />
          <h2 className="font-medium text-3xl">Sign Up</h2>
          <p className="font-normal">Enter your details below to create your account and get started.</p>
        </div>

        <SignupForm />

        <p className="font-medium text-sm text-gray-400 text-center tracking-tight">Already have an account? <span className="text-[#353535]"><Link to="/login">Login</Link></span></p>
      </section>
    </main>
  )
};

export default SignupPage;
