const { Category } = require('../models');

const createNewCategory = async (newName) => {
    const createdCategory = await Category.create({ name: newName });

    return { type: null, message: createdCategory };
};

module.exports = {
    createNewCategory,
};