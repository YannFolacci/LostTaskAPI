const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Item = new Schema({
    name: {
        type: String,
        required: true
    },
    subItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    quantity: {
        type: Number,
        default: 1
    },    
});

module.exports = mongoose.model('Item', Item);