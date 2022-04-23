const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ServerState = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('ServerState', ServerState);