import express from "express";
import protectedRoutes from "../../middleware/protectedRoutes.js";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/send/:receiverId", protectedRoutes, async (req, res) => {
  const { receiverId } = req.params;
  const { message } = req.body;
  const { senderId } = req;

  try {
    let conversation = await prisma.conversation.findFirst({
      where: {
        participantsId: { hasEvery: [senderId, receiverId] },
      },
    });
  
    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          participantsId: [senderId, receiverId],
        },
      });
    }
  
    const previousMessageIds = conversation.messagesId;
  
    const newMessage = await prisma.message.create({
      data: {
        body: message,
        senderId: senderId,
        receiverId: receiverId,
      },
    });
  
    if (newMessage) {
      const data = await prisma.conversation.update({
        where: {
          conversationId: conversation.conversationId,
        },
        data: {
          messagesId: [...previousMessageIds, newMessage.messageId],
        },
      });
    }
  
    return res.json({
      message: "message sent",
    });

  } catch (error) {
    res.status(500).json({
      error : "Internal Server Error"
    })
  }
});

router.get("/:userToChatWith", protectedRoutes, async (req, res) => {
  const { userToChatWith } = req.params;
  const { senderId } = req;

  try {
    const conversation = await prisma.conversation.findFirst({
      where: {
        participantsId: { hasEvery: [senderId, userToChatWith] },
      },
      select: { messages: true },
    });

    if (!conversation) {
      return res.status(403).json({
        messages: [],
      });
    }

    return res.status(200).json({
      messages: conversation,
    });
    
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

export default router;