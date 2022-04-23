const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Character = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    tier: {
        type: Number,
        min: 1,
        max: 3,
        required: true
    },
    classe: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Classe'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

});

module.exports = mongoose.model('Character', Character);