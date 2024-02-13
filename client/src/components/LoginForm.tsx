import { useState } from "react";
import InputField from "./ui/InputField";
import submitLoginForm from "../utils/submitLoginForm";

const LoginForm = (): React.JSX.Element => {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
  }>({ username: "", email: "", password: "" });

  return (
    <form action="" className="flex flex-col gap-8 w-[400px]">
      <InputField
        fieldValue="username"
        placeholder="Enter your username"
        fieldType="text"
        formData={formData}
        setFormData={setFormData}
      />
      <InputField
        fieldValue="email"
        placeholder="Enter your email address"
        fieldType="email"
        formData={formData}
        setFormData={setFormData}
      />
      <InputField
        fieldValue="password"
        placeholder="Enter your password"
        fieldType="password"
        formData={formData}
        setFormData={setFormData}
      />

      <button
        onClick={(evt) => {submitLoginForm(evt, formData);}}
        className="bg-[#2b2b2b] text-white py-3 w-full rounded-xl capitalize font-semibold tracking-widest"
      >
        Sign in
      </button>
    </form>
  );
};
export default LoginForm;