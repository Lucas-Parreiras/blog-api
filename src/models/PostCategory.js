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
        tableName: 'posts_categories',
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'posts_categories',
          through: PostCategory,
          foreignKey: 'postId', // se refere ao id de Book na tabela de `users_books`
          otherKey: 'categoryId', // se refere a outra chave de `users_books`
        });
        models.Category.belongsToMany(models.BlogPost, {
          as: 'blog_posts',
          through: PostCategory,
          foreignKey: 'categoryId', // se refere ao id de User na tabela de `users_books`
          otherKey: 'postId',
        });
      };

    return PostCategory;
};

module.exports = PostCategoryModel;