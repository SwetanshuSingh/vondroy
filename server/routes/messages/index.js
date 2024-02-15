import express from "express"
import protectedRoutes from "../../middleware/protectedRoutes.js";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/send/:receiverId", protectedRoutes,  async (req, res) => {

    const { receiverId } = req.params
    const { message } = req.body
    const { senderId } = req

    let conversation = await prisma.conversation.findFirst({
        where : {
            participantsId : { hasEvery : [senderId, receiverId] }
        }
    })

    if(!conversation){
        conversation = await prisma.conversation.create({
            data : {
                participantsId : [senderId, receiverId]
            }
        })
    }

    const previousMessageIds = conversation.messagesId;

    const newMessage = await prisma.message.create({
        data : {
            body : message,
            senderId : senderId,
            receiverId : receiverId
        }
    })

    if(newMessage){
        const data = await prisma.conversation.update({
            where : {
                conversationId : conversation.conversationId
            },
            data : {
                messagesId : [...previousMessageIds, newMessage.messageId]
            }
        })
    }
    
    res.json({
        message : senderId
    })
})

export default router;