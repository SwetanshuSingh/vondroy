import { userSchema } from "./userSchema";

async function login(
  evt,
  formData,
  setIsInputUnvalid,
  setAuthorizationToken,
) {
  evt.preventDefault();
  const validatedInput = userSchema.safeParse({
    username: formData.username,
    email: formData.email,
    password: formData.password,
  });

  if (!validatedInput.success) {
    return setIsInputUnvalid(true);
  }
  setIsInputUnvalid(false);

  const response = await fetch(`${import.meta.env.VITE_PROD_BACKEND_URL}/signin`, {
    method: "GET",
    headers: {
      "content-type": "application-json",
      username: formData.username,
      password: formData.password,
    },
  });
  const result = await response.json();
  try {
    if (result.authorization) {
      setAuthorizationToken(result.authorization);
    }
  } catch (e) {
    console.log(e);
  }
}

export { login };
