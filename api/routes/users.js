const express = require('express');
const Users = require('../models/Users');

const router = express.Router();

router.get('/:email', (req, res) => {
    Users.find({ email: req.params.email })
        .exec()
        .then((x) => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Users.create(req.body).then((x) => res.status(201).send(x));
});

module.exports = router;
