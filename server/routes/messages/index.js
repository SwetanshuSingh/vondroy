import express from "express"
import protectedRoutes from "../../middleware/protectedRoutes.js";

const router = express.Router();

router.post("/send/:receiverId", protectedRoutes,  async (req, res) => {
    const { receiverId } = req.params
    res.json({
        message : userId
    })
})

export default router;