import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const protectedRoutes = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(403).json({
        message: "Unauthorized access",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(403).json({
        message: "Invalid Credentials",
      });
    }

    const user = await prisma.user.findFirst({
      where: {
        username: decoded.username,
      },
    });

    if (!user) {
      res.status(403).json({
        message: "User not found",
      });
    }

    req.senderId = user.id;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default protectedRoutes;
