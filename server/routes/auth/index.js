import express from "express";
import userSchema from "../../schema/index.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/signup", async (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (result.success !== true) {
    return res.status(403).json({
      message: "Invalid form details",
    });
  }

  const isExistingUser = await prisma.user.findFirst({
    where: {
      username: req.body.username,
    },
  });

  if (isExistingUser === !null) {
    return res.status(403).json({
      message: "User aleardy Exists",
    });
  }

  const profileAvatar =
    req.body.gender === "male"
      ? `https://avatar.iran.liara.run/public/boy?username=${req.body.username}`
      : `https://avatar.iran.liara.run/public/girl?username=${req.body.username}`;

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.password,
        profilePic: profileAvatar,
      },
    });
    return res.json({
      message: `User successfully created with username ${user.data.username}`,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      messge: "Internal Server Error",
    });
  }
});

router.get("/login", (req, res) => {});

router.get("/logout", (req, res) => {});

export default router;