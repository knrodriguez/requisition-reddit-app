const db = require('../database');
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
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isURL: true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT
    },
    subReddit: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    body: {
        type: Sequelize.TEXT,
    }
})

// Post.beforeCreate((post) => {
//     p
// })