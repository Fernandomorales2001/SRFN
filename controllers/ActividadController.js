var Actividad = require('../models/actividades');

function registrar(req,res) {
    //Variable que verificara si se mandan los datos, por ejemplo: titulo, descripcion o datos de texto
    var data = req.body;
    var actividad = new Actividad();
    actividad.tipoActividad = data.tipoActividad;
    actividad.fechaDonacion = data.fechaDonacion;
    actividad.idUser = data.idUser;

    //Vamos actualizarlo
    actividad.save((err,actividad_save)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if (actividad_save) {
                res.status(200).send({actividad: actividad_save});  
            }else{
                res.status(403).send({message: 'No se registro la actividad'});
            }
        }
    });
}

function listar(req,res) {
    //Vamos a obtener la variable titulo creada en las rutas
    var tipoActividad = req.params['tipoActividad'];

    //Consulta para poder listar todos las actividades por su titulo
    Actividad.find({tipoActividad: new RegExp(tipoActividad,'i')},(err,actividad_listado)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (actividad_listado) {
                res.status(200).send({actividades: actividad_listado});
            }
            else{
                res.status(403).send({message: 'No hay ningun registro con ese titulo'});
            }
        }
    });
}

function obtener_actividad(req,res) {
    //Vamos a capturar que estamos pasando por la ruta
    var id = req.params['id'];
    
    //Hacemos una consulta
    Actividad.findById({_id: id},(err,actividad_data)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (actividad_data) {
                res.status(200).send({actividad: actividad_data});
            }
            else{
                res.status(403).send({message: 'El registro no existe'});
            }
        }
    });
}

function editar(req,res) {
    var id = req.params['id'];
    var data = req.body;
    //Hacer una consulta para actualizar
    Actividad.findByIdAndUpdate({_id:id},{tipoActividad: data.tipoActividad, idUser: data.idUser},(err,actividad_edit)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        }  else {
            if (actividad_edit) {
                res.status(200).send({actividad: actividad_edit});
            }
            else{
                res.status(403).send({message: 'La actividad no se pudo actualizar'});
            }
        }
    });
}

function eliminar(req,res) {
    var id = req.params['id'];

    //Hacemos una consulta para eliminar
    Actividad.findByIdAndRemove({_id:id},(err,actividad_delete)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if (actividad_delete) {
                res.status(200).send({actividad: actividad_delete});
            }else{
                res.status(403).send({message: 'No se pudo eliminar el registro'});
            }
        }
    });
}

module.exports = {
    registrar,
    listar,
    editar,
    obtener_actividad,
    eliminar
}