const { User, Post, Requisition } = require('./models');
const db = require('./database');

//Associations
User.hasMany(Post);
Post.belongsTo(User);

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