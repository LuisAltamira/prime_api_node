'use strict';

const Favorito = require('../models/favorito');

function prueba(req, res){
    res.status(200).send({message: 'Hola mundo desde NODE JS'});
}

function getFavorito(req, res){
    let id = req.params.id;
    Favorito.findById(id, (err, data) => {
        if (err){
            res.status(500).send({message: 'error al devolver el marcador'});
        } else {
            if(!data){
                res.status(404).send({message: 'No hay marcador'});
            } else {
                res.status(200).send({data})
            }
        }
    });
}

function getFavoritos(req, res){
    Favorito.find({},(err, data) => {
        if (err) {
            res.status(500).send('error al devolver los marcadores');
        } else {
            if (!data) {
                res.status(404).send({message: 'no hay marcadores'});
            } else {
                res.status(200).send({data});
            }
        }  
    });
}

function saveFavorito(req, res){
    let params = req.body;
    let favorito = new Favorito();
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;
    favorito.save((err, data)=>{
        if(err) {
            res.status(500).send({message: `Error al guardar el marcador favorito`});
        } else {
            res.status(200).send({favorito: data});
        }
    });
}

function updateFavorito(req, res){
    let params = req.body;
    let id = req.params.id;
    Favorito.findByIdAndUpdate(id, params, (err, data) => {
        if (err){
            res.status(500).send({message: 'Error al actualizar el marcador'});
        } else {
            res.status(200).send({params});
        }
    });
}

function deleteFavorito(req, res){
    let id = req.params.id;
    Favorito.findById(id, (err, data) => {
        if (err){
            res.status(500).send({message: 'error al devolver el marcador'});
        }
        if(!data){
            res.status(404).send({message: 'No hay marcador'});
        } else {
            data.remove(err => {
                if (err) {
                    res.status(500).send({message:'Error al borrar'});
                } else {
                    res.status(200).send({message: 'El marcador se ha eliminado'});
                }
            });
        }
    });
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}