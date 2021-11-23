//Inicializacion de mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Crear un modelo para el esquema 
//Atributos de la tabla
var DonacionSchema = Schema({
    tipoDonacion: String,
    fechaDonacion: {type: Date, default: Date.now},
    recursoDonado: {type: Schema.ObjectId, ref: 'recursos'},
    idUser: {type: Schema.ObjectId, ref: 'user'}    
});

//Exportacion de modulos
module.exports = mongoose.model('Donacion',DonacionSchema);