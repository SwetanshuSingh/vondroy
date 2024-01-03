const express = require("express");
const cors = require("cors");
const signup = require("./routes/signup");
const signin = require("./routes/signin");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/signup", signup);
app.use("/signin", signin);

app.listen(PORT, () => {
  console.log("Listening on PORT 3000");
});
