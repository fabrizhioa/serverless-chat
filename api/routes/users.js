//importar paquete
const express = require('express');

//importar modelo
const Users = require('../models/Users');

//iniciar Ruta
const router = express.Router();

//accciones validas
router.get('/:email', (req, res) => {
    Users.find({ email: req.params.email })
        .exec()
        .then((x) => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Users.create(req.body).then((x) => res.status(201).send(x));
});

//exportar ruta
module.exports = router;
