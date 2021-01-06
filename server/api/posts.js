const router = require('express').Router();
const Op = require('sequelize').Op;
const { Post, Requisition, User } = require('../db/models');

//HAVE TO ADD USERIDs to each method

router.get('/', async(req,res,next) => {
    try {
        let reqId = req.query.requisitionId;
        let posts;
        if(reqId){
            posts = await Post.findAll({
                where: {requisitionId: [reqId]},
                include: [{
                    model: Requisition, 
                    where: {
                        userId: req.session.userId
                    }
                }]
            })
        } else{
            posts = await Post.findAll({
                include: [{
                    model: Requisition, 
                    where: {
                        userId: req.session.userId
                    }
                }]
            }); 

        } if(posts.length) {
            res.send(posts);
        }
    } catch (error) {
        next(error);
    }
})

router.get('/:postId', async(req,res,next) => {
    try {
        const post = await Post.findByPk(req.params.postId);
        res.send(post);
    } catch (error) {
        next(error);
    }
})


module.exports = router;
