const express = require('express');
const Messages = require('../models/Messages');

const router = express.Router();

router.get('/', (req, res) => {
    Messages.find()
        .exec()
        .then((x) => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Messages.create(req.body).then((x) => res.status(201).send(x));
});

module.exports = router;
