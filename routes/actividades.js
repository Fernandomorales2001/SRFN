//Variable para inicializar express
var express = require('express');

//Variable para requerir el controlador user
var ActividadController = require('../controllers/ActividadController');

//Vamos a crear esta variable e igualarla a express y usaremos el enrutado de express
var api = express.Router();

api.post('/actividad/registrar',ActividadController.registrar);
api.get('/actividades/:tipoActividad?',ActividadController.listar);
api.get('/actividad/:id',ActividadController.obtener_actividad);
api.put('/actividad/editar/:id',ActividadController.editar);
api.delete('/actividad/eliminar/:id',ActividadController.eliminar);

module.exports = api;