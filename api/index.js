//importar paquetes requeridos
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//importar rutas
const messages = require('./routes/messages');
const users = require('./routes/users');

//iniciar servidor
const app = express();

app.use(bodyParser.json());

app.use(cors());

//conexion con base de datos

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//rutas validas de la api

app.use('/api/messages', messages);

app.use('/api/users', users);

//exportar aplicacion

module.exports = app;
