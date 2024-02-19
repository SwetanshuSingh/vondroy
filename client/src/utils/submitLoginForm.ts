import { FormEvent } from "react";

interface FormData {
    [key : string] : string
  }

type Event = FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>

const submitLoginForm =  async (evt : Event, formData : FormData) =>{
    evt.preventDefault();
    const response : Response  = await fetch("http://localhost:3000/api/auth/login", {
        method : "POST",
        body : JSON.stringify(formData),
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const result = await response.json()

    console.log(result)
}

export default submitLoginForm;