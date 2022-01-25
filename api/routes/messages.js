//importar paquete
const express = require('express');

//importar modelo de base de dato
const Messages = require('../models/Messages');

//iniciar ruta
const router = express.Router();

//accciones disponibles

router.get('/', (req, res) => {
    Messages.find()
        .exec()
        .then((x) => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Messages.create(req.body).then((x) => res.status(201).send(x));
});

//exportar ruta

module.exports = router;
