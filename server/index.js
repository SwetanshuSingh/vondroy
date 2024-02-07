import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import authRoutes from "./routes/auth/index.js"

dotenv.config()
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        message : "Hello from localhost:3000/"
    })
})

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server running");
});