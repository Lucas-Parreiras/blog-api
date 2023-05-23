const express = require('express');

const { postsController } = require('../controllers');
const { autenticateToken } = require('../middlewares/validateJWT');
const { validateFields } = require('../middlewares/createPostValidation');

const router = express.Router();

router.get('/', autenticateToken, postsController.getAllPosts);

router.post('/', autenticateToken, validateFields, postsController.createNewPost);

module.exports = router;