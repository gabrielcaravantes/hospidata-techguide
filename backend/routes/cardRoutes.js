const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');
const { verifyToken } = require('../controllers/authController');  //middleware para proteger rotas

//rota para criar um novo card (protegida por token)
router.post('/create', verifyToken, cardController.createCard);

//rota para listar todos os cards
router.get('/', verifyToken, cardController.getAllCards);

//rota para expandir um card específico
router.get('/:id', verifyToken, cardController.getCardById);

module.exports = router;
