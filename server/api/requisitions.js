const { Requisition } = require('../db');
const router = require('express').Router();

//HAVE TO ADD USERIDs to each method

const missingUser = () => {
    const err = new Error ('Missing UserId');
    err.status = 500;
    next(err);
}

router.get('/', async(req,res,next) => {
    try {
        if(!req.session.userId){
            missingUser();
        }
        const requisitions = await Requisition.findAll({
            where: {userId: req.session.userId}
        });
        if(requisitions) res.send(requisitions);
    } catch (error) {
        next(error);
    }
})

router.get('/:requisitionId', async(req,res,next) => {
    try {
        if(!req.session.userId){
            missingUser();
        }
        const posts = await Post.findAll({
            where: {
                requisitionId: [req.params.requisitionId],
                userId: req.session.userId
            }
        })
        res.send(posts);
    } catch (error) {
        next(error);
    }
});

router.post('/', async(req,res,next) => {
    try {
        if(!req.session.userId){
            missingUser();
        }
        const newReq = await Requisition.create(req.body);
        if(newReq) res.send(newReq);
    } catch (error) {
        next(error);
    }
})

module.exports = router;