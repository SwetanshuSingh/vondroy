import SignupForm from "../components/SignupForm";

const SignupPage = (): React.JSX.Element => {
  return (
    <section className="w-full h-[100vh] flex flex-col justify-center items-center font-0 gap-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[#2b2b2b] text-4xl font-extrabold">Vondroy</h1>
        <h2 className="text-[#2b2b2b] font-light text-2xl">Let&apos;s set up your vondroy account!</h2>
      </div>
      <SignupForm />
    </section>
  );
};

export default SignupPage;
