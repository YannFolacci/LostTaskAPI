const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TaskType = new Schema({
    name: {
        type: String,
        required: true
    },
    reset: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('TaskType', TaskType);