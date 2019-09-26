const express = require('express');

const routes = express.Router();
const UsuarioController = require('./controllers/UsuarioController');

routes.post('/Usuario', UsuarioController.store);

routes.get("/Usuario/:email", UsuarioController.index);

module.exports = routes;
