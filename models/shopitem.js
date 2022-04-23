const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ShopItem = new Schema({
    quantity: {
        type: Number,
        min: 0,
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('ShopItem', ShopItem);