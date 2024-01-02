const express = require("express");
const User = require('./db/index');

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    await User.create({
        username : username,
        email : email,
        password : password
    })
    res.json({message : 'User created'})
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000');
})