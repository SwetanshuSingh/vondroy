const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MOONGO_DB_CONNECTION_STRING);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
