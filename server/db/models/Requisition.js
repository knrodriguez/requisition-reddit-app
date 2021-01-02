const db = require('./database');
const Sequelize = require('sequelize');

module.exports = db.define('requisition', {
    searchString: {
        type: Sequelize.STRING, //ARRAY? 
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }, 
    subReddits: {
        type: Sequelize.ARRAY(Sequelize.STRING),
    }
})