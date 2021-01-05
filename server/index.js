//express middleware

const path = require('path');
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const session = require('express-session');

//HTTP logger
app.use(volleyball);

//body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//Session middleware
app.use(session({
    secret: 'not secure',
    resave: false,
    saveUninitialized: false
}))

//static files
app.use(express.static(path.join(__dirname, '../public')));

//connect to our routers
app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

//if URL is not in our routes folder, send index.html
app.get('*', (req,res,next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

//error handling endpoint
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Something broke!');
});

module.exports = app;
