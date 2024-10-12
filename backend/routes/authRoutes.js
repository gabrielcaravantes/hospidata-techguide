const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//rota para registro
router.post('/register', authController.register);

//rota para login
router.post('/login', authController.login);

module.exports = router;
