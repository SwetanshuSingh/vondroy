import express from "express";
import { userSchema, loginSchema } from "../../schema/index.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import genereateTokenandSetcookie from "../../utils/generateToken.js";

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

  if (isExistingUser !== null) {
    return res.status(403).json({
      message: "User aleardy Exists",
    });
  }

  const profileAvatar =
    req.body.gender === "male"
      ? `https://avatar.iran.liara.run/public/boy?username=${req.body.firstname}`
      : `https://avatar.iran.liara.run/public/girl?username=${req.body.firstname}`;

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  genereateTokenandSetcookie(req.body.username, req.body.email, res);

  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        profilePic: profileAvatar,
      },
    });

    return res.status(200).json({
      message: `User successfully created with username ${user.username}`,
      credentials : {id : user.id, username : user.username, email : user.email, firstname : user.firstname, lastname : user.lastname, profile : user.profilePic}
    });
  } catch (err) {
    return res.status(500).json({
      error : "Internal Server Error",
    });
  }
});

router.post("/login", async (req, res) => {
  const result = loginSchema.safeParse(req.body);

  if (result.success !== true) {
    return res.status(403).json({
      message: "Invalid form details",
    });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        username: req.body.username,
      },
    });

    if (user === null) {
      return res.status(403).json({
        message: "User does not exists",
      });
    }

    const isCorrectpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isCorrectpassword) {
      return res.status(403).json({
        message: "Invalid Password",
      });
    }

    genereateTokenandSetcookie(req.body.username, req.body.email, res);
    res.json({
      message: "Successfully logged in",
      credentials : {id : user.id, username : user.username, email : user.email, firstname : user.firstname, lastname : user.lastname, profile : user.profilePic}
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Erorr",
    });
  }
});

router.get("/logout", (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

export default router;