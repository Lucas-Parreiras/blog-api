const { Category } = require('../models');

const createNewCategory = async (newName) => {
    const createdCategory = await Category.create({ name: newName });

    return { type: null, message: createdCategory };
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();

    return { type: null, message: allCategories };
};

const getCategoryById = async (id) => {
    const category = await Category.findByPk(id);

    return { type: null, message: category };
};

module.exports = {
    createNewCategory,
    getAllCategories,
    getCategoryById,
};