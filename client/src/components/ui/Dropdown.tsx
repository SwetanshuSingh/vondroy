import { ChangeEvent } from "react";

interface FormData {
  [key : string] : string
}

interface DropdownProps {
  labelName : string,
  fieldName : string,
  formData : FormData,
  setFormData : React.Dispatch<React.SetStateAction<FormData>>
}

const Dropdown = ({ labelName, fieldName, formData, setFormData } : DropdownProps) : React.JSX.Element => {

  const handleChange = (evt : ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev : FormData) => {
      prev[evt.target.name] = evt.target.value;
      return { ...prev }
    })
  }

    return(
    <div className="w-[50%] flex flex-col gap-1">
      <label className="text-sm" htmlFor="gender">
        { labelName }
      </label>
      <select
        name={fieldName}
        value={formData[fieldName]}
        id="gender"
        onChange={(evt) => {handleChange(evt)}}
        className="w-full border border-gray-300 outline-none px-2 py-2 rounded-md shadow-sm font-light text-sm placeholder:text-sm placeholder:font-normal">
            <option value="">Please select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </div>
    )
}

export default Dropdown;