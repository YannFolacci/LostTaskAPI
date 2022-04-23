const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Server = new Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true
    },
    crystal_rate: {
        type: Number,
        default: 800
    },
    region: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Region',
        required: true
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServerState',
    }
});

module.exports = mongoose.model('Server', Server);