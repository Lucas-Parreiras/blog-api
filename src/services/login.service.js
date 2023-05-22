const { User } = require('../models');

const userLogin = async (email, password) => {
    const selectedUser = await User.findOne({ where: { email } });
    if (!selectedUser || password !== selectedUser.password) {
        return { type: 'NOT_FOUND', message: 'Invalid fields' };
    }
    return { type: null, message: selectedUser };
};

module.exports = {
    userLogin,
};