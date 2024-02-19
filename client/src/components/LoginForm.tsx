import { useState } from "react";
import LoginInputField from "./ui/LoginInputField";
import submitLoginForm from "../utils/submitLoginForm";

interface FormData {
  [key : string] : string
}

const LoginForm = () : React.JSX.Element => {

  const [formData, setFormData] = useState<FormData>({username : '', email : '', password : ''});

  return (
    <form onSubmit={(evt) => {submitLoginForm(evt, formData)}} className="w-full font-0 text-[#353535] flex flex-col gap-10" action="/">
      <div className="w-full flex flex-col gap-6">
        <LoginInputField labelName="Username" fieldName="username" placeholderText="enter..." fieldType="text" formData={formData} setFormData={setFormData} />
        <LoginInputField labelName="Email" fieldName="email" placeholderText="example@xyz.com" fieldType="email" formData={formData} setFormData={setFormData} />
        <LoginInputField labelName="Password" fieldName="password" placeholderText="enter..." fieldType="password" formData={formData} setFormData={setFormData} />  
      </div>

      <button onClick={(evt) => {submitLoginForm(evt, formData)}} className="w-full bg-[#353535] text-white font-medium py-2 rounded-md shadow-sm tracking-wider">Login</button>
    </form>
  )
}

export default LoginForm;