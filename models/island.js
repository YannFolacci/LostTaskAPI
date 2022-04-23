const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Island = new Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },
    ilevel: Number

});

module.exports = mongoose.model('Island', Island);