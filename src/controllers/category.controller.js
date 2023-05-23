const { categoryService } = require('../services');

const OK = 200;
const CREATED = 201;

const createNewCategory = async (req, res) => {
    const { name } = req.body;
    const { message } = await categoryService.createNewCategory(name);
    return res.status(CREATED).json(message);
};

const getAllCategories = async (req, res) => {
    const { message } = await categoryService.getAllCategories();

    return res.status(OK).json(message);
};

module.exports = {
    createNewCategory,
    getAllCategories,
};