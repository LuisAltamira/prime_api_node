'use strict';

const Favorito = require('../models/favorito');

function prueba(req, res){
    res.status(200).send({message: 'Hola mundo desde NODE JS'});
}

function getFavorito(req, res){
    let id = req.params.id;
    res.status(200).send({favorito:id});

}

function getFavoritos(req, res){
    
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
        }
        res.status(200).send({favorito: data});
    });
    res.status(200).send({favorito:params});
}

function updateFavorito(req, res){
    let params = req.body;
    res.status(200).send({update: true});
}

function deleteFavorito(req, res){
    let id = req.params.id;
    res.status(200).send({delete: true});
}

module.exports = {
    prueba,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}