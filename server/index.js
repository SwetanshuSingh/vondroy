import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth/index.js";
import messageRoutes from "./routes/messages/index.js";
import userRoutes from "./routes/user/index.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  console.log("Server running");
});