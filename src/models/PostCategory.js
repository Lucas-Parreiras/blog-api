/* eslint-disable max-lines-per-function */
const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            field: 'post_id',
            references: {
              model: 'blog_posts',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            primaryKey: true,
          },
          categoryId: {
            type: DataTypes.INTEGER,
            field: 'category_id',
            references: {
              model: 'categories',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            primaryKey: true,
          },
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'posts_categories',
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId',
        });
        models.Category.belongsToMany(models.BlogPost, {
          as: 'blog_posts',
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
        });
      };

    return PostCategory;
};

module.exports = PostCategoryModel;