const router = require('express').Router();
const snoowrap = require('snoowrap');
const cron = require('node-cron');
const dotenv = require('dotenv');
const { Requisition, Post } = require('../db');
dotenv.config();

//HAVE TO ADD USERIDs to each method

const r = new snoowrap({
    userAgent: 'fds this needs to be dfsd fsdwerff',
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
        const insertedPosts = await Post.bulkCreate(fetchedPosts);
        if(insertedPosts) res.sendStatus(200);
    } catch (error) {
        next(error);
    }
})

async function queryReddit(subReddits, searchString, reqId){
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
            imageUrl: post.preview ? post.preview.images[0].source.url : '', //source image - maybe take thumbnail?
            subReddit: subReddits[i],
            requisitionId: reqId
        })));
    }
    return allNewPosts;
}

module.exports = router;