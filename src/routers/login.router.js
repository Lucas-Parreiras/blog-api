const express = require('express');

const { loginController } = require('../controllers');

const { validateEmailPassword } = require('../middlewares/loginValidation');

const router = express.Router();

router.post('/', validateEmailPassword, loginController.userLogin);

module.exports = router;