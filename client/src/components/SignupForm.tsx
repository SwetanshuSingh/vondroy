import { ChangeEvent, useState } from "react";
import InputField from "./ui/InputField";

interface FormData {
  [key : string] : string
}

const SignupForm = () : React.JSX.Element => {

  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (evt : ChangeEvent<HTMLInputElement>) => {
    setFormData((prev : FormData) => {
      prev[evt.target.name] = evt.target.value;
      return { ...prev }
    })
  }

  return(
    <form className="w-full font-0 text-[#353535] flex flex-col gap-6" action="/">
      <section className="w-full flex gap-2">

        <div className="w-[50%] flex flex-col gap-1">
          <label className="text-sm" htmlFor="firstname">First Name</label>
          <input name="firstName" value={formData.firstName} onChange={(evt) => {handleChange(evt)}} placeholder="enter..." className="w-full border border-gray-300 outline-none px-2 py-2 rounded-md shadow-sm font-light text-sm placeholder:text-sm placeholder:font-normal" type="text" />
        </div>

        <div className="w-[50%] flex flex-col gap-1">
          <label className="text-sm" htmlFor="lastname">Last Name</label>
          <input name="lastName" value={formData.lastName} onChange={(evt) => {handleChange(evt)}} placeholder="enter..." className="w-full border border-gray-300 outline-none px-2 py-2 rounded-md shadow-sm font-light text-sm placeholder:text-sm placeholder:font-normal" type="text" />
        </div>

      </section>

      <section className="w-full flex gap-2">
        <InputField labelName="Email" fieldName="email" formData={formData} placeholderText="example@xyz.com" fieldType="text" setFormData={setFormData} />
      </section>
    </form>
  )
} 

export default SignupForm; 