'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = (process.env.port || 3000);

mongoose.connect('mongodb://localhost:27017/curso', (err, res) => {
    if (!err) {
        app.listen(port, () => console.log('\nservidor andando\n'));
    } else {
        console.log(`Error de conexion a la base de datos \n ${err}`);
    }
});