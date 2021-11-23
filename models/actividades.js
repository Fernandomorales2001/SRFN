var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Crear un modelo para el esquema 
//Atributos de la tabla
var ActividadSchema = Schema({
    tipoActividad: String,
    fechaDonacion: {type: Date, default: Date.now},
    idUser: {type: Schema.ObjectId, ref: 'user'}    
});

//Exportacion de modulos
module.exports = mongoose.model('Actividad',ActividadSchema);