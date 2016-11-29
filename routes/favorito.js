'use strict';

const express = require('express');
const FavoritoController = require('../controllers/favorito');
const api = express.Router();

api.get('/', FavoritoController.prueba);
api.get('/favorito/:id', FavoritoController.getFavorito);
api.post('/favorito', FavoritoController.saveFavorito);

module.exports = api;