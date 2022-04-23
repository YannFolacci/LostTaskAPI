const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Region = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    abbr: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Region', Region);