//Inicializacion de mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Crear un modelo para el esquema 
//Atributos de la tabla
var RecursoSchema = Schema({
    nombreRecurso: String,
    descripcion: String,
    fechaingresado: {type: Date, default: Date.now}
});

//Exportacion de modulos
module.exports = mongoose.model('recurso',RecursoSchema);