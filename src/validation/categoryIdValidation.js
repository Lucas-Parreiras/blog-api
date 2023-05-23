const { getCategoryById } = require('../services/category.service');

const validateIds = async (arrIds) => {
    const allCheck = arrIds.map(async (catId) => {
        const { message } = await getCategoryById(catId);
        if (!message) {
            throw new Error('one or more "categoryIds" not found');
        }
    });
    await Promise.all(allCheck);
};

module.exports = {
    validateIds,
};