const db = require('../database');
const Sequelize = require('sequelize');
const passwordHash = require('password-hash');

const User = db.define('user', {
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

User.beforeCreate((user) => {
    user.password = passwordHash.generate(user.password);
})

User.beforeUpdate((user) => {
    user.password = passwordHash.generate(user.password);
})

module.exports = User;
