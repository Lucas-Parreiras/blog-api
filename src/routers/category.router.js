const express = require('express');

const { categoryController } = require('../controllers');
const { validateName } = require('../middlewares/createCategoryValidation');
const { autenticateToken } = require('../middlewares/validateJWT');

const router = express.Router();

router.post('/', autenticateToken, validateName, categoryController.createNewCategory);

module.exports = router;