const router = require('express').Router();
const snoowrap = require('snoowrap');

const r = new snoowrap({
    userAgent: 'fds this needs to be dfsd fsdwerff',
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_SECRET_TOKEN,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN
})

r.getHot().map(post => post).then(console.log);

//subreddit_name_prefixed
//title
//selftext - or use innate search
//media - url_overridden_by_dest


module.exports = router;
