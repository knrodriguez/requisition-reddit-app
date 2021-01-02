const db = require('./database');
const Sequelize = require('sequelize');

module.exports = db.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    redditUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isURL: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    subReddit: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }, 
    
})