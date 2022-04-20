const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const orderDetailSchema = new mongoose.Schema({
    order_id: {
        type: Number
    },
    product_id: {
        type: Number
    },
    quantity: {
        type: Number
    }
});
autoIncrement.initialize(mongoose.connection);

orderDetailSchema.plugin(autoIncrement.plugin, 'orderDetail');

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema, 'orderDetail');

module.exports = {
    OrderDetail
}
