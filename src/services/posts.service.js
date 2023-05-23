/* eslint-disable max-lines-per-function */
const { BlogPost, PostCategory, User, Category } = require('../models');
const { validateIds } = require('../validation/categoryIdValidation');

const createNewPost = async (postInfo, userId) => {
    const { title, content, categoryIds } = postInfo;

    await validateIds(categoryIds);

    const newBlogPost = await BlogPost.create({
        title,
        content,
        userId,
    });

    const bulkArr = categoryIds.map((id) => ({ postId: newBlogPost.id, categoryId: id }));
    await PostCategory.bulkCreate(bulkArr);

    return { type: null, message: newBlogPost };
};

const getAllPosts = async () => {
    const allPosts = await BlogPost.findAll({
        include: [
          {
            model: User,
            as: 'user',
            attributes: { exclude: 'password' },
          },
          { model: Category, as: 'categories' },
        ],
      });

    return { type: null, message: allPosts };
};

module.exports = {
    createNewPost,
    getAllPosts,
};