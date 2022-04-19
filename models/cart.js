const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const cartSchema = new mongoose.Schema({
    totalPrice: {
        type: Number
    }
});
autoIncrement.initialize(mongoose.connection);

cartSchema.plugin(autoIncrement.plugin, 'cart');

const Cart = mongoose.model('Cart', cartSchema, 'cart');

module.exports = {
    Cart
}
