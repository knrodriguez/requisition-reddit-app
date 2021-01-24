const Sequelize = require('sequelize');
const pkg = require('../../package.json');

//postgres://rpkwnfie:U8RRPVtM5fCNJRJ0Dg5vjdrtEaHKBJqH@ziggy.db.elephantsql.com:5432/rpkwnfie
//`postgres://localhost:5432/${pkg.name}`

const db = new Sequelize(`postgres://localhost:5432/requisition-reddit`, {
    logging: false
});

module.exports = db;