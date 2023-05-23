const BAD_REQUEST = 400;

function validateName(req, res, next) {
    const { name } = req.body;
    if (!name) {
        return res.status(BAD_REQUEST).json({ message: '"name" is required' });
    }
    return next();
}

module.exports = {
    validateName,
};