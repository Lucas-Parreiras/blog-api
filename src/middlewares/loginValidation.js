function validateEmailPassword(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json('Some required fields are missing');
    }
    return next();
}

module.exports = {
    validateEmailPassword,
};