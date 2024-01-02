const mongoose = require('mongoose');

mongoose.connect(process.env.MOONGOSE_CONNECTION_STRING);

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    passsword : String
})

const User = mongoose.model('User', userSchema)


module.exports = User;