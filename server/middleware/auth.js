const User = require('../db/index');

async function authMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    const userExists = await User.findOne({
        username : username,
        password : password
    });

    if(!userExists){
        return res.status(403).json({
            message : 'Invalid Credentials'
        })
    }
    res.status(200)
    next();
}

module.exports = authMiddleware;