import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

//no 

  const handleChange = (evt) => {
    const fieldName = evt.target.name;
    const value = evt.target.value;
    setFormData((prev) => {
      prev[fieldName] = value;
      return { ...prev };
    });
  };

  return (
    <form className="font-mono text-[#fffceb] flex flex-col gap-6" action="/">
      <div className="field flex flex-col gap-1">
        <label htmlFor="username" className="font-semibold text-lg capitalize">
          Username
        </label>
        <input
          className="w-full h-9 border-2 border-[#90CF8E] px-2 rounded-md outline-none text-[#a67b5b]"
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
          className="w-full h-9 border-2 border-[#90CF8E] px-2 rounded-md outline-none text-[#a67b5b]"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="field flex flex-col gap-1">
        <label htmlFor="password" className="font-semibold text-lg capitalize">
          Password
        </label>
        <input
          className="w-full h-9 border-2 border-[#90CF8E] px-2 rounded-md outline-none text-[#a67b5b]"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button className="w-full h-10 bg-[#fffceb] rounded-lg uppercase text-[#a67b5b] font-semibold">
        Sign Up
      </button>
    </form>
  );
}
