'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    idx: DataTypes.NUMBER,
    subject: DataTypes.STRING,
    content: DataTypes.STRING,
    midx: DataTypes.NUMBER,
    cidx: DataTypes.NUMBER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};