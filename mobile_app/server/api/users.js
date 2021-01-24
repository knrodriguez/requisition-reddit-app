const router = require('express').Router();
const { User } = require('../db/models');

router.put('/:userId', async(req,res,next) => {
    try {
        const user = await User.update(req.body, {
            where: {id: req.params.userId}
        });
        if(user) res.send(user);
    } catch (error) {
        next(error);
    }
})

module.exports = router;