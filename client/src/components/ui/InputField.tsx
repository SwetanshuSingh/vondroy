type InputFieldProps = {
    fieldValue : string,
    placeholder : string,
    fieldType : string 
}

const InputField = ({ fieldValue, placeholder, fieldType } : InputFieldProps): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldValue} className="text-[#2b2b2b] font-normal capitalize">
        {fieldValue} :
      </label>

      <input
        id={fieldValue}
        name={fieldValue}
        type={fieldType}
        placeholder={placeholder}
        className="w-[400px] h-[45px] border-2 border-gray-300 outline-none rounded-lg py-2 px-3 font-normal text-sm tracking-widest"
      />
    </div>
  );
};

export default InputField;