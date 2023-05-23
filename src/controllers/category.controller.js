const { categoryService } = require('../services');

const CREATED = 201;

const createNewCategory = async (req, res) => {
    const { name } = req.body;
    const { message } = await categoryService.createNewCategory(name);
    return res.status(CREATED).json(message);
};

module.exports = {
    createNewCategory,
};