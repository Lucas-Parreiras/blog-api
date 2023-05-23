const BAD_REQUEST = 400;

function validateName(req, res, next) {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(BAD_REQUEST)
            .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    return next();
}

function validateEmail(req, res, next) {
    const { email } = req.body;
    const regexEmail = /.+@.+\.com/;
    const isEmailValid = regexEmail.test(email);
    if (!isEmailValid) {
        return res.status(BAD_REQUEST)
            .json({ message: '"email" must be a valid email' });
    }
    return next();
}

function validatePassword(req, res, next) {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(BAD_REQUEST)
            .json({ message: '"password" length must be at least 6 characters long' });
    }
    return next();
}

module.exports = {
    validateName,
    validateEmail,
    validatePassword,
};