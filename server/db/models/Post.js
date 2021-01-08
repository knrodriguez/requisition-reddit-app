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
        type: Sequelize.TEXT,
        defaultValue: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F12%2FReddit-Desktop-Wallpaper.jpg&f=1&nofb=1'
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
