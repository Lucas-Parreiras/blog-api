const { User } = require('../models');

const createNewUser = async ({ displayName, email, password, image }) => {
    const emailIsValid = await User.findOne({ where: { email } });
    if (emailIsValid) {
        return { type: 'ALREADY_REGISTERED', message: 'User already registered' };
    }

    const createdUser = await User.create({
        displayName,
        email,
        password,
        image,
    });

    return { type: null, message: createdUser };
};

const getUseyById = async (id) => {
    const user = await User.findOne({ where: { id } });
    if (!user) {
        return { type: 'NOT_FOUND', message: 'User not found' };
    }
    return { type: null, message: user };
};

const getAllUsers = async () => {
    const allUsers = await User.findAll({
        attributes: { exclude: ['password'] },
      });
    return { type: null, message: allUsers };
};

module.exports = {
    createNewUser,
    getUseyById,
    getAllUsers,
};