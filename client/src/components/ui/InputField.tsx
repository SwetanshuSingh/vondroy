import { ChangeEvent } from "react";

type InputFieldProps = {
    fieldValue : string,
    placeholder : string,
    fieldType : string
    inputValue : {username: string; email: string; password: string; [key : string] : string}
    setInputValue : React.Dispatch<React.SetStateAction<{username : string, email : string, password : string}>>
}

const InputField = ({ fieldValue, placeholder, fieldType, inputValue, setInputValue } : InputFieldProps): React.JSX.Element => {

  const handleChange = (evt : ChangeEvent<HTMLInputElement>){
    setInputValue((prev) => {
      return ({...prev,evt.target.name = evt.target.value})
    })
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldValue} className="text-[#2b2b2b] font-normal capitalize">
        {fieldValue} :
      </label>

      <input
        id={fieldValue}
        name={fieldValue}
        type={fieldType}
        value={inputValue[fieldValue]}
        // onChange={handleChange}
        placeholder={placeholder}
        className="w-[400px] h-[45px] border-2 border-gray-300 outline-none rounded-lg py-2 px-3 font-normal text-sm tracking-widest"
      />
    </div>
  );
};

export default InputField;