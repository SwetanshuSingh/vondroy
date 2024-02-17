import { useState } from "react";
import InputField from "./ui/InputField";
import Dropdown from "./ui/Dropdown";

interface FormData {
  [key : string] : string
}

const SignupForm = () : React.JSX.Element => {

  const [formData, setFormData] = useState<FormData>({firstName : '', lastName : '', username : '', email : '', password : '', gender : ''});

  

  return(
    <form className="w-full font-0 text-[#353535] flex flex-col gap-12" action="/">
      <div className="w-full flex flex-col gap-6">
      <section className="w-full flex gap-2">
        <InputField labelName="First Name" fieldName="firstName" formData={formData} placeholderText="enter..." fieldType="text" setFormData={setFormData} />
        <InputField labelName="Last Name" fieldName="lastName" formData={formData} placeholderText="enter..." fieldType="text" setFormData={setFormData} />
      </section>

      <section className="w-full flex gap-2">
        <InputField labelName="Username" fieldName="username" formData={formData} placeholderText="enter..." fieldType="text" setFormData={setFormData} />
        <InputField labelName="Password" fieldName="password" formData={formData} placeholderText="enter..." fieldType="password" setFormData={setFormData} />
      </section>

      <section className="w-full flex gap-2">
        <InputField labelName="Email" fieldName="email" formData={formData} placeholderText="example@xyz.com" fieldType="text" setFormData={setFormData} />
        <Dropdown labelName="Gender" fieldName="gender" formData={formData} setFormData={setFormData} />
      </section>
      </div>

      <section className="w-full flex gap-2">
        <button className="w-[50%] bg-[#353535] text-white font-medium py-1 rounded-md shadow-sm">Confirm</button>
        <button className="w-[50%] border border-[#353535] font-medium py-1 rounded-md shadow-sm">Cancel</button>
      </section>
      
    </form>
  )
} 

export default SignupForm; 