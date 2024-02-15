import express from "express"
import protectedRoutes from "../../middleware/protectedRoutes.js";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/send/:receiverId", protectedRoutes,  async (req, res) => {

    const { receiverId } = req.params
    const { message } = req.body
    const { senderId } = req

    const conversation = await prisma.conversation.findFirst({
        where : {
            userId : { hasEvery : [senderId, receiverId] }
        }
    })

    console.log(conversation)


    res.json({
        message : senderId
    })
})

export default router;