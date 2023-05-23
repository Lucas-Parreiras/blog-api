/* eslint-disable max-lines-per-function */
const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          title: {
            type: DataTypes.STRING,
          },
          content: {
            type: DataTypes.STRING,
          },
          userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            field: 'user_id',
            references: {
              model: 'users',
              key: 'id',
            },
          },
          published: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          updated: {
            type: DataTypes.DATE,
          },
    }, {
        underscored: true,
        tableName: 'blog_posts',
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(
            models.User,
            { foreingKey: 'userId', as: 'users' },
            );
    };

    return BlogPost;
};

module.exports = BlogPostModel;