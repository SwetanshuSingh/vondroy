async function login(evt, formData, navigate) {
  evt.preventDefault();
  const response = await fetch("http://localhost:3000/signin", {
    method: "GET",
    headers: {
      "content-type": "application-json",
      username: formData.username,
      password: formData.password,
    },
  });
  const data = await response.json();
  try{
    if(data.message === 'User found'){
        return navigate("../chat")
    }
    console.log('cannot change the state');
  }
  catch(e){
    console.log(e)
  }
}

export { login };
