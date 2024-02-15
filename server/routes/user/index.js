import express from "express";
import protectedRoutes from "../../middleware/protectedRoutes.js";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient()

router.get("/", protectedRoutes, async (req, res) => {
    const { senderId } = req
    
    try {
        const users = await prisma.user.findMany({
            where : {
                NOT : {
                    id : senderId
                }
            },
            select : {
                id : true,
                username : true,
                email : true,
                firstname : true,
                lastname : true,
                profilePic : true
            }
        })

        if(!users){
            return res.status(403).json({
                message : "No users found"
            })
        }

        return res.status(200).json({
            message : users
        })

    } catch (error) {
        res.json(500).json({
            error : "Internal Server Error"
        })
    }
})

export default router;