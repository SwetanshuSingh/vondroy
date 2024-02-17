import { ChangeEvent } from "react";

interface FormData {
  [key : string] : string
}

interface LoginInputFieldProps {
  labelName : string,
  fieldName : string,
  formData : FormData,
  placeholderText : string,
  fieldType : string,
  setFormData : React.Dispatch<React.SetStateAction<FormData>>
}

const LoginInputField = ({ labelName, fieldName, formData, placeholderText, fieldType, setFormData } : LoginInputFieldProps): React.JSX.Element => {

  const handleChange = (evt : ChangeEvent<HTMLInputElement>) => {
    setFormData((prev : FormData) => {
      prev[evt.target.name] = evt.target.value;
      return { ...prev }
    })
  }

  return (
    <div className="w-full min-w-80 flex flex-col gap-1">
      <label className="text-sm" htmlFor={fieldName}>
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

export default LoginInputField;