import LoginForm from "../components/LoginForm";

const LoginPage = (): React.JSX.Element => {
  return (
    <section className="w-full h-[100vh] flex flex-col justify-center items-center font-0 gap-8">
      <h1 className="text-[#2b2b2b] text-4xl font-extrabold">Vondroy</h1>
      <h2 className="text-[#2b2b2b] font-light text-2xl">Welcome Back!</h2>
      <LoginForm />
    </section>
  );
};

export default LoginPage;