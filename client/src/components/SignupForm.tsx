import { ChangeEvent, useState } from "react";

const SignupForm = (): React.JSX.Element => {
  const [formData, setFormData] = useState<{
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    gender: string;
  }>({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      prev[evt.target.name] = evt.target.value;
      return { ...prev };
    });
  };

  return (
    <form action="" className="flex flex-col gap-6 w-[420px]">
      <div className="wrapper flex justify-between">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="firstname"
            className="text-[#2b2b2b] font-normal capitalize"
          >
            First name :
          </label>

          <input
            id="firstname"
            name="firstname"
            type="text"
            value={formData.firstname}
            onChange={(evt) => {
              handleChange(evt);
            }}
            placeholder="Enter your firstname"
            className="w-[200px] h-[45px] border-2 border-gray-300 outline-none rounded-lg py-2 px-3 font-normal text-sm tracking-widest"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="lastname"
            className="text-[#2b2b2b] font-normal capitalize"
          >
            Last name :
          </label>

          <input
            id="lastname"
            name="lastname"
            type="text"
            value={formData.lastname}
            onChange={(evt) => {
              handleChange(evt);
            }}
            placeholder="Enter your lastname"
            className="w-[200px] h-[45px] border-2 border-gray-300 outline-none rounded-lg py-2 px-3 font-normal text-sm tracking-widest"
          />
        </div>
      </div>

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
          className="w-full h-[45px] border-2 border-gray-300 outline-none rounded-lg py-2 px-3 font-normal text-sm tracking-widest"
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
          className="w-full h-[45px] border-2 border-gray-300 outline-none rounded-lg py-2 px-3 font-normal text-sm tracking-widest"
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
          className="w-full h-[45px] border-2 border-gray-300 outline-none rounded-lg py-2 px-3 font-normal text-sm tracking-widest"
        />
        <p className="font-light text-sm">*password should be atleast 6 characters long</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2>Gender :</h2>
        <div className="wrapper flex justify-between w-[50%]">
          <div className="flex gap-1">
            <input
              type="radio"
              value="male"
              id="male"
              name="gender"
              checked={formData.gender === "male"}
              onChange={(evt) => {
                handleChange(evt);
              }}
            />
            <label htmlFor="male">Male</label>
          </div>

          <div className="flex gap-1">
            <input
              type="radio"
              value="female"
              id="female"
              name="gender"
              checked={formData.gender === "female"}
              onChange={(evt) => {
                handleChange(evt);
              }}
            />
            <label htmlFor="male">Female</label>
          </div>
        </div>
      </div>

      <button className="bg-[#2b2b2b] text-white py-3 w-full rounded-xl capitalize font-semibold tracking-widest">
        Sign Up
      </button>
    </form>
  );
};
export default SignupForm;
