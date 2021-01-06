const { User, Post, Requisition } = require('./models');
const db = require('./database');

Requisition.hasMany(Post);
Post.belongsTo(Requisition);

User.hasMany(Requisition);
Requisition.belongsTo(User);

module.exports = {
    db,
    User, 
    Post, 
    Requisition
}