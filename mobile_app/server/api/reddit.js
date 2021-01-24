const router = require('express').Router();
const snoowrap = require('snoowrap');
const dotenv = require('dotenv');
const { Requisition, Post } = require('../db');
const e = require('express');
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
        for(let i = 0; i < fetchedPosts.length; i++){
            const [instance, wasCreated] = await Post.findOrCreate({
                where: {redditUrl: fetchedPosts[i].redditUrl},
                defaults:{...fetchedPosts[i]}
            });
            console.log('CREATED:',wasCreated)
            if(wasCreated) { insertedPosts.push(instance); } 
            console.log('INSERTED', insertedPosts);
        }
        console.log('INSERTEDPOSTS:',insertedPosts)
        if(insertedPosts.length > 0) {
            res.status(200).send(insertedPosts);
        } else{
            res.sendStatus(200);
        }
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
                requisitionId: parseInt(reqId)
            })));
        }
        return allNewPosts;
    } catch (error) {
      console.error('Cannot query reddit', error);  
    } 
}

module.exports = router;