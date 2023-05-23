const BAD_REQUEST = 400;

function validateFields(req, res, next) {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        return res.status(BAD_REQUEST).json({ message: 'Some required fields are missing' });
    }

    return next();
}

module.exports = {
    validateFields,
};