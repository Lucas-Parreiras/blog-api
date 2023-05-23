const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;
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

const getUserById = async (req, res) => {
    const id = Number(req.params.id);
    const { type, message } = await userService.getUserById(id);
    if (type) {
        return res.status(NOT_FOUND).json({ message });
    }

    return res.status(OK).json(message);
};

module.exports = {
    userCreate,
    getAllUsers,
    getUserById,
};