import { ChangeEvent } from "react";

interface FormData {
  [key : string] : string
}

interface InputFieldProps {
  labelName : string,
  fieldName : string,
  formData : FormData,
  placeholderText : string,
  fieldType : string,
  setFormData : React.Dispatch<React.SetStateAction<FormData>>
}

const InputField = ({ labelName, fieldName, formData, placeholderText, fieldType, setFormData } : InputFieldProps): React.JSX.Element => {

  const handleChange = (evt : ChangeEvent<HTMLInputElement>) => {
    setFormData((prev : FormData) => {
      prev[evt.target.name] = evt.target.value;
      return { ...prev }
    })
  }

  return (
    <div className="w-[50%] flex flex-col gap-1">
      <label className="text-sm" htmlFor="firstname">
        { labelName }
      </label>
      <input
        name={ fieldName }
        value={ formData[fieldName] }
        type={fieldType}
        onChange={(evt) => {
          handleChange(evt);
        }}
        placeholder={placeholderText}
        className="w-full border border-gray-300 outline-none px-2 py-2 rounded-md shadow-sm font-light text-sm placeholder:text-sm placeholder:font-normal"
      />
    </div>
  );
};

export default InputField;