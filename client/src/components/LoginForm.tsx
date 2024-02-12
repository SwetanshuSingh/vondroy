import { ChangeEvent, useState } from "react";

const LoginForm = (): React.JSX.Element => {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
  }>({ username: "", email: "", password: "" });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      prev[evt.target.name] = evt.target.value;
      return { ...prev };
    });
  };

  return (
    <form action="" className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="username"
          className="text-[#2b2b2b] font-normal capitalize"
        >
          Username :
        </label>

        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={(evt) => {
            handleChange(evt);
          }}
          placeholder="Enter your username"
          className="w-[400px] h-[45px] border-2 border-gray-300 outline-none rounded-lg py-2 px-3 font-normal text-sm tracking-widest"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-[#2b2b2b] font-normal capitalize"
        >
          Email :
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(evt) => {
            handleChange(evt);
          }}
          placeholder="Enter your email address"
          className="w-[400px] h-[45px] border-2 border-gray-300 outline-none rounded-lg py-2 px-3 font-normal text-sm tracking-widest"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-[#2b2b2b] font-normal capitalize"
        >
          Password :
        </label>

        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={(evt) => {
            handleChange(evt);
          }}
          placeholder="Enter your password"
          className="w-[400px] h-[45px] border-2 border-gray-300 outline-none rounded-lg py-2 px-3 font-normal text-sm tracking-widest"
        />
      </div>

      <button className="bg-[#2b2b2b] text-white py-3 w-[400px] rounded-xl capitalize font-semibold tracking-widest">
        Sign in
      </button>
    </form>
  );
};
export default LoginForm;
