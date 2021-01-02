//express middleware

const path = require('path');
const express = require('express');
const app = express();
const volleyball = require('volleyball');

//HTTP logger
app.use(volleyball);

//static files
app.use(express.static('../public'));

//body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//connect to our routes in the API folder
app.use('/api', require('./api'));

//if URL is not in our routes folder, send index.html
app.get('*', async(req,res,next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

//error handling endpoint
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Something broke!');
});

module.exports = app;
