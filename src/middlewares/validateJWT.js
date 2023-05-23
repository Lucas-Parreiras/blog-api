const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;
const UNAUTHORIZED = 401;

const autenticateToken = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(UNAUTHORIZED).json({ message: 'Token not found' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        const { type, message } = await userService.getUseyById(decoded.data.userId);
        if (type) {
            return res.status(UNAUTHORIZED).json({ message: 'Expired or invalid token' });
        }

        req.user = message;
        return next();
    } catch (error) {
        return res.status(UNAUTHORIZED).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    autenticateToken,
};