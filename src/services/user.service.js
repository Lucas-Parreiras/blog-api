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

module.exports = {
    createNewUser,
};