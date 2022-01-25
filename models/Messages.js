const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Messages = mongoose.model(
    'Messages',
    new Schema({
        messageText: String,
        userId: String,
        userName: String,
        fecha: Date,
    })
);

module.exports = Messages;
