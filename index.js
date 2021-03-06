const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const messages = require('./routes/messages');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/messages', messages);
app.use('/api/users', users);

module.exports = app;
