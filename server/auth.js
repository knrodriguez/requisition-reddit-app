const router = require('express').Router();
const { User } = require('./db');
const passwordHash = require('password-hash')

const userNotFound = (next) => {
    const err = new Error("User Not Found");
    err.status = 404;
    next(err);
}

router.get('/me', async(req,res,next) => {
    try {
        if(!req.session.userId){
            userNotFound(next);
        } else{
            const user = await User.findByPk(req.session.userId);
            user ? res.send(user) : userNotFound(next);
        }
    } catch (error) {
        next(error);
    }
})

router.put('/login', async(req,res,next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            where: { 
                username: username
            }
        })
        if(user && passwordHash.verify(password, user.password)) {
            req.session.userId = user.id;
            res.send(user);
        } else{
            const err = new Error ('Incorrect email or password!');
            err.status = 401;
            next(err);
        }
    } catch (error) {
        next(error);
    }
})

router.delete('/logout', (req,res,next) => {
    try {
        req.session.destroy();
        res.status(204).end();
    } catch (error) {
        
    }
})

module.exports = router;
