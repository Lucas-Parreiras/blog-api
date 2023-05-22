const jwt = require('jsonwebtoken');
const { loginService } = require('../services');

const OK = 200;
const BAD_REQUEST = 400;

const secret = process.env.JWT_SECRET;

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const { type, message } = await loginService.userLogin(email, password);

    if (type === 'NOT_FOUND') {
        return res.status(BAD_REQUEST).json({ message });
    }

    const { id } = message;
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
    
    const token = jwt.sign({ data: { userId: id } }, secret, jwtConfig);

    return res.status(OK).json({ token });
};

module.exports = { userLogin };