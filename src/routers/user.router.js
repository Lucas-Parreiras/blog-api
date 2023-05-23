const express = require('express');

const { userController } = require('../controllers');
const { validateName,
    validateEmail, validatePassword } = require('../middlewares/createUserValidation');
const { autenticateToken } = require('../middlewares/validateJWT');

const router = express.Router();

router.post('/', validateName, validateEmail, validatePassword, userController.userCreate);

router.get('/', autenticateToken, userController.getAllUsers);

module.exports = router;