import express from "express"

const router = express.Router();

router.post("/signup", (req, res) => {
    const { username } = req.body;
    console.log(username);

    res.json({
        message : 'data received'
    })
    

})

router.get("/login", (req, res) => {
    res.json({
        message : 'heyy'
    })
})

export default router;