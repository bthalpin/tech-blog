// import models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Comment,{
  foreignKey:'userId'
})

User.hasMany(Post,{
    foreignKey:'userId'
})
Comment.belongsTo(User,{
  foreignKey:'userId',
  onDelete:'CASCADE'
})

Post.hasMany(Comment,{
  foreignKey:'postId'
})
Comment.belongsTo(Post,{
  foreignKey:'postId',
  onDelete:'CASCADE'
})
Post.belongsTo(User,{
  foreignKey:'userId',
  onDelete:'CASCADE'
})




module.exports = {
  Comment,
  Post,
  User,
};
