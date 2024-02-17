import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = (): React.JSX.Element => {
  return (
    <main className="w-full h-[100vh] bg-[#e8ebed] flex justify-center items-center">

      <section className="bg-white p-8 rounded-lg flex flex-col gap-8">

        <div className="heading font-0 text-[#353535] flex flex-col items-center gap-2">
          <img className="w-12 h-12" src="/logos/conversify-logo.png" alt="logo" />
          <h2 className="font-medium text-3xl">Welcome Back</h2>
          <div className="font-normal text-center">
            <p>Glad to see you again 👋</p>
            <p >Login to your account below</p>
          </div>
        </div>

        <LoginForm />

        <p className="font-medium text-sm text-gray-400 text-center tracking-tight">Don't have an account? <span className="text-[#353535]"><Link to="/signup">Signup</Link></span></p>
      </section>
    </main>
  )
};

export default LoginPage;
