import { userSchema } from "./userSchema";

async function signup(evt, formData, setIsInputUnvalid, navigation) {
  evt.preventDefault();
  const validatedInput = userSchema.safeParse({
    username: formData.username,
    email: formData.email,
    password: formData.password,
  });

  if(!validatedInput.success){
    return setIsInputUnvalid(true);
  }
  setIsInputUnvalid(false);
  const response = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    }),
  });
  const result = await response.json();
  if(result.message === "success"){
    navigation("/signin")
  }
}

export { signup };
