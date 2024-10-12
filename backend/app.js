const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const cardRoutes = require('./routes/cardRoutes');
require('dotenv').config();

app.use(express.json());  //habilita o recebimento de JSON no body das requisições

app.use('/auth', authRoutes);  //rotas de autenticação
app.use('/cards', cardRoutes); //rotas de cards

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
