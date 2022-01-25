const express = require('express');
const User = require('../models/Users');

const router = express.Router();

router.get('/:email', (req, res) => {
    User.find({ email: req.params.email })
        .exec()
        .then((x) => res.status(200).send(x));
});

router.post('/', (req, res) => {
    User.create(req.body).then((x) => res.status(201).send(x));
});

module.exports = router;
