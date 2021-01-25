const router = require('express').Router();
const Op = require('sequelize').Op;
const { Post, Requisition, User } = require('../db/models');

//HAVE TO ADD USERIDs to each method

router.get('/:userId', async(req,res,next) => {
    try {
        let posts = await Post.findAll({
            include: [{
                model: Requisition, 
                where: {
                    userId: req.params.userId
                }
            }]
        }); 
        console.log(posts)
        if(posts.length) {
            res.send(posts);
        }
    } catch (error) {
        next(error);
    }
})

// router.get('/:postId', async(req,res,next) => {
//     try {
//         const post = await Post.findByPk(req.params.postId);
//         res.send(post);
//     } catch (error) {
//         next(error);
//     }
// })

router.delete('/:postId', async(req,res,next) => {
    try {
        const response = await Post.destroy({
            where: {id: req.params.postId}
        })
        if(response) res.sendStatus(204);
    } catch (error) {
        next(error);
    }
})


module.exports = router;
