const db = require('../database');
const Sequelize = require('sequelize');

module.exports = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }, 
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})
