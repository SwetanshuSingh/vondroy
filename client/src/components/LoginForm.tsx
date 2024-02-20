import { FormEvent, useState } from "react";
import LoginInputField from "./ui/LoginInputField";
import useLogin from "../hooks/useLogin";
import { Loader2 } from "lucide-react";

interface FormData {
  [key : string] : string
}

type Event = FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>

const LoginForm = () : React.JSX.Element => {

  const [formData, setFormData] = useState<FormData>({username : '', email : '', password : ''});

  const {loading, login} = useLogin();

  const handleSubmit = async (evt : Event) => {
    evt.preventDefault();
    await login(formData);
  }

  return (
    <form onSubmit={(evt) => {handleSubmit(evt)}} className="w-full font-0 text-[#353535] flex flex-col gap-10" action="/">
      <div className="w-full flex flex-col gap-6">
        <LoginInputField labelName="Username" fieldName="username" placeholderText="enter..." fieldType="text" formData={formData} setFormData={setFormData} />
        <LoginInputField labelName="Email" fieldName="email" placeholderText="example@xyz.com" fieldType="email" formData={formData} setFormData={setFormData} />
        <LoginInputField labelName="Password" fieldName="password" placeholderText="enter..." fieldType="password" formData={formData} setFormData={setFormData} />  
      </div>

      <button onClick={(evt) => {handleSubmit(evt)}} className="w-full flex items-center justify-center bg-[#353535] text-white font-medium py-2 rounded-md shadow-sm tracking-wider">{loading ? <Loader2 className=" animate-spin" /> : "Login"}</button>
    </form>
  )
}

export default LoginForm;