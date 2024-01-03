const mongoose = require("mongoose");

mongoose.connect(process.env.MOONGO_CONNECTION_STRING);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
