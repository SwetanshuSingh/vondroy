async function signup(evt, formData) {
  evt.preventDefault();
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
  console.log(result);
}

export { signup };
