const express = require("express");
const router = express.Router();
const User = require('../db/index');

router.post("/", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const existingUser = await User.findOne({
    username: username,
    email: email,
  });

  if (existingUser) {
    return res.json({
      message: "User already exists",
    });
  }

  await User.create({
    username: username,
    password: password,
    email: email,
  });
  res.json({ message: "success" });
});

module.exports = router;
