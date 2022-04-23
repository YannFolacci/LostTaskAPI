const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Task = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Island',
        required: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskType',
        required: true
    },
    rewards: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'ShopItem',
    },
});

module.exports = mongoose.model('Task', Task);