const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const db = new Sequelize(`postgres://localhost:5432/requisition-reddit`, {
    logging: false
});

module.exports = db;