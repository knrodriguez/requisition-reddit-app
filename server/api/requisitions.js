const { Requisition } = require('../db');
const router = require('express').Router();

//HAVE TO ADD USERIDs to each method

router.get('/', async(req,res,next) => {
    try {
        const reqs = await Requisition.findAll();
        if(reqs.length === 0){
            res.send('I work but cant find anything');
        } else{
            res.send(reqs);
        }
    } catch (error) {
        next(error);
    }
})

router.get('/:requisitionId', async(req,res,next) => {
    try {
        const posts = await Post.findAll({
            where: {
                requisitionId: [req.params.requisitionId]
            }
        })
        res.send(posts);
    } catch (error) {
        next(error);
    }
});

router.post('/', async(req,res,next) => {
    try {
        const newReq = await Requisition.create(req.body);
        if(newReq) res.send(newReq);
    } catch (error) {
        next(error);
    }
})

module.exports = router;