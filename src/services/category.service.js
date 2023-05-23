const { Category } = require('../models');

const createNewCategory = async (newName) => {
    const createdCategory = await Category.create({ name: newName });

    return { type: null, message: createdCategory };
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();

    return { type: null, message: allCategories };
};

module.exports = {
    createNewCategory,
    getAllCategories,
};