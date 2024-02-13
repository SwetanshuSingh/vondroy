interface formData {
    username: string,
    email: string,
    password: string
}

const submitLoginForm =  async (evt : React.MouseEvent<HTMLButtonElement, MouseEvent>, formData : formData) =>{
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