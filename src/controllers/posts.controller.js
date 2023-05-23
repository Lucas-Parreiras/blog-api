const { postsService } = require('../services');

const CREATED = 201;
const BAD_REQUEST = 400;

const createNewPost = async (req, res) => {
    try {
        const { id } = req.user;
        const { type, message } = await postsService.createNewPost(req.body, id);
        if (type) {
            return res.status(BAD_REQUEST).json({ message });
        }
        return res.status(CREATED).json(message);
    } catch (error) {
        return res.status(BAD_REQUEST).json({ message: error.message });
    }
};

module.exports = {
    createNewPost,
};