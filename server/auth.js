const router = require('express').Router();
const { User } = require('./db');

router.put('/login', async(req,res,next) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);
        const user = await User.findOne({
            where: { 
                username: username, 
                password: password 
            }
        })
        if(!user.id){
            const err = new Error ('Incorrect email or password!');
            err.status = 401;
            next(err);
        } res.send(user);
    } catch (error) {
        next(error);
    }
})

module.exports = router;
