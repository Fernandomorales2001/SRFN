//Variable para inicializar express
var express = require('express');

//Variable para requerir el controlador user
var UserController = require('../controllers/UserController');

//Vamos a crear esta variable e igualarla a express y usaremos el enrutado de express
var api = express.Router();

api.post('/registrar',UserController.registrar);
api.post('/login',UserController.login);
api.get('/usuarios',UserController.listar);
api.put('/user/editar/:id',UserController.editar)
api.get('/user/:id',UserController.get_user)

module.exports = api;