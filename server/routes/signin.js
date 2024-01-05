const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const jwt = require("jsonwebtoken");

const jwtPassword = process.env.JWT_PASSWORD;

router.get("/", authMiddleware, (req, res) => {
  const username = req.headers.username;

  const token = jwt.sign({ username }, jwtPassword);
  res.json({
    authorization: token,
  });
});

module.exports = router;
