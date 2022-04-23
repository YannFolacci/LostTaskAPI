const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserTask = new Schema({
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    timesdone: {
        type: Number,
        min: 0,
        default: 0
    }

});

module.exports = mongoose.model('UserTask', UserTask);