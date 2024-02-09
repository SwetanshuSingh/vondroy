import InputField from "./ui/InputField";

const LoginForm = () : React.JSX.Element => {
    return (
        <form action="" className="flex flex-col gap-8">
            <InputField fieldValue="username" fieldType="text" placeholder="Enter your username" />
            <InputField fieldValue="email" fieldType="email" placeholder="Enter your email" />
            <InputField fieldValue="password" fieldType="password" placeholder="Enter your password" />
            <button className="bg-[#2b2b2b] text-white py-3 w-[400px] rounded-xl capitalize font-semibold tracking-widest">Sign in</button>
        </form>
    )
}

export default LoginForm;