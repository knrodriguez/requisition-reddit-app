const router = require('express').Router();
const snoowrap = require('snoowrap');
const dotenv = require('dotenv');
const { Requisition, Post } = require('../db');
dotenv.config();

//HAVE TO ADD USERIDs to each method

const r = new snoowrap({
    userAgent: 'web:com.requisition-reddit--version-1.0',
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_SECRET_TOKEN,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN
})

router.get('/:reqId', async(req,res,next) => {
    try {
        const reqId = req.params.reqId;
        const requisition = await Requisition.findByPk(reqId);
        const subReddits = requisition.dataValues.subReddits;
        const searchString = requisition.dataValues.searchString;
        const fetchedPosts = await queryReddit(subReddits, searchString, reqId);
        const insertedPosts = [];
        for(const post of fetchedPosts){
            const [instance, wasCreated] = await Post.findOrCreate({
                where: {...post}
            });
            if(wasCreated) { insertedPosts.push(instance); } 
        }
        res.status(200).send(insertedPosts);
    } catch (error) {
        next(error);
    }
})

async function queryReddit(subReddits, searchString, reqId){
    try {
        const allNewPosts = [];
        for(let i = 0; i < subReddits.length; i++){
            const posts = await r.getSubreddit(subReddits[i]).search({
                query: searchString,
                time: 'hour',
                sort: 'new',
            });
            allNewPosts.push(...posts.map(post => ({
                title: post.title, 
                redditUrl: `https://www.reddit.com${post.permalink}`,
                imageUrl: post.preview ? post.preview.images[0].source.url : null,
                subReddit: subReddits[i],
                body: post.selftext,
                requisitionId: reqId
            })));
        }
        return allNewPosts;
    } catch (error) {
      console.error('Cannot query reddit', error);  
    } 
}

module.exports = router;