const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = mongoose.model(
    'users',
    new Schema({
        userName: String,
        email: String,
    })
);

module.exports = Users;
