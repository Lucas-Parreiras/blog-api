/* eslint-disable max-lines-per-function */
const { BlogPost, PostCategory } = require('../models');
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

module.exports = {
    createNewPost,
};