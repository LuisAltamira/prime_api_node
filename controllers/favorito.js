'use strict';

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
    res.status(200).send({favorito:params});
}

function updateFavorito(req, res){
    
}

function deleteFavorito(req, res){
    
}

module.exports = {
    prueba,
    getFavorito
}