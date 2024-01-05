const express = require("express");
const User = require("../db");
const validateToken = require("../middleware/validateToken");

const router = express.Router();

router.get("/", validateToken, async (req, res) => {
  const users = await User.find({});
  const usernames = users.map((user) => {
    return user.username;
  });
  res.json({
    usernames,
  });
});

module.exports = router;
