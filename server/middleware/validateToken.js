const jwt = require("jsonwebtoken");

const jwtPassword = process.env.JWT_PASSWORD;

function validateToken(req, res, next){
    const token = req.headers.token;
    if(!token){
        return res.json({message : "access denied"});
    }
    try{
        const isVerified = jwt.verify(token, jwtPassword);
        console.log(isVerified);
        if(isVerified){
            next();
        }
    }
    catch(e){
        // console.log(e);
        return res.json({message : "Invalid token"});
    }
}

module.exports = validateToken;