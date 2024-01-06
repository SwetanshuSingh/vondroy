import { useState } from "react";
import { signup } from "../utils/signup";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigation = useNavigate();
  const [isInputUnvalid, setIsInputUnvalid] = useState(false);

  const handleChange = (evt) => {
    const fieldName = evt.target.name;
    const value = evt.target.value;
    setFormData((prev) => {
      prev[fieldName] = value;
      return { ...prev };
    });
  };

  return (
    <>
      <form className="font-mono text-[#2b2d42] flex flex-col gap-6" action="">
        <div className="field flex flex-col gap-1">
          <label
            htmlFor="username"
            className="font-semibold text-lg capitalize"
          >
            Username
          </label>
          <input
            className="w-full h-9 border-2 border-[#2b2d42]  px-2 rounded-md outline-none text-[#a67b5b]"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="field flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold text-lg capitalize">
            Email
          </label>
          <input
            className="w-full h-9 border-2 border-[#2b2d42]  px-2 rounded-md outline-none text-[#a67b5b]"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="field flex flex-col gap-1">
          <label
            htmlFor="password"
            className="font-semibold text-lg capitalize"
          >
            Password
          </label>
          <input
            className="w-full h-9 border-2 border-[#2b2d42]  px-2 rounded-md outline-none text-[#a67b5b]"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          onClick={(evt) => {
            signup(evt, formData, setIsInputUnvalid, navigation);
          }}
          className="w-full h-10 bg-[#2b2d42] rounded-lg uppercase text-[#f4f3ee] font-semibold"
        >
          Sign Up
        </button>
        {isInputUnvalid ? (
          <h1 className="text-center text-xl font-semibold text-[#ef233c]">
            Invalid Input
          </h1>
        ) : null}
      </form>
    </>
  );
}
