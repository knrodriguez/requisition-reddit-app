const router = require('express').Router();
const Op = require('sequelize').Op;
const { Post } = require('../db/models');

//HAVE TO ADD USERIDs to each method

router.get('/', async(req,res,next) => {
    try {
        let reqId = req.query.requisitionId;
        let posts;
        if(reqId){
            posts = await Post.findAll({
                where: {requisitionId: [reqId]}
            })
        } else{
            posts = await Post.findAll(); 
        }
        if(posts.length === 0){
            res.send('I work but cant find anything');
        } else{
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

//r.getHot().map(post => post).then(console.log);

//subreddit_name_prefixed
//title
//selftext - or use innate search
//media - url_overridden_by_dest


module.exports = router;
