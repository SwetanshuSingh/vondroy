const express = require("express");
const cors = require("cors");
const signup = require("./routes/signup");
const signin = require("./routes/signin");
const users = require("./routes/users");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/signup", signup);
app.use("/signin", signin);
app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
