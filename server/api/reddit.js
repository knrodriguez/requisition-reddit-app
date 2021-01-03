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
        const allNewPosts = [];
        for(let i = 0; i < subReddits.length; i++){
           const posts = (await r.getSubreddit(subReddits[i]).search({
                query: searchString,
                time: 'hour',
                sort: 'new',
            }));
            allNewPosts.push(posts.map(post => ({
                title: post.title, 
                redditUrl: `https://www.reddit.com${post.permalink}`,
                imageUrl: post.preview ? post.preview.images[0].source.url : '', //source image - maybe take thumbnail?
                subReddit: subReddits[i],
                requisitionId: reqId
            })));
        }
        await Post.bulkCreate(allNewPosts)
        res.send(allNewPosts);
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