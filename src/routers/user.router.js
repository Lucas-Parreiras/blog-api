const express = require('express');

const { userController } = require('../controllers');
const { validateName,
    validateEmail, validatePassword } = require('../middlewares/createUserValidation');

const router = express.Router();

router.post('/', validateName, validateEmail, validatePassword, userController.userCreate);

module.exports = router;