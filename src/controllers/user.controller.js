const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const OK = 200;
const CREATED = 201;
const CONFLICT = 409;

const secret = process.env.JWT_SECRET;

const userCreate = async (req, res) => {
    const { type, message } = await userService.createNewUser(req.body);
    if (type === 'ALREADY_REGISTERED') {
        return res.status(CONFLICT).json({ message });
    }

    const { id } = message;
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
    
    const token = jwt.sign({ data: { userId: id } }, secret, jwtConfig);

    return res.status(CREATED).json({ token });
};

const getAllUsers = async (req, res) => {
    const { message } = await userService.getAllUsers();

    return res.status(OK).json(message);
};

module.exports = {
    userCreate,
    getAllUsers,
};