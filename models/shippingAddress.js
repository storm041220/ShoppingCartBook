const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

const addressSchema = new mongoose.Schema({
    address: {
        type: String,
    },
    country: {
        type: String,
    },
    state: {
        type: String
    },
    zipcode: {
        type: String
    },
    city: {
        type: String
    }
});
autoIncrement.initialize(mongoose.connection);
addressSchema.plugin(autoIncrement.plugin, 'shippingAddress');
const ShippingAddress = mongoose.model('ShippingAddress', addressSchema, 'shippingAddress');

module.exports = {
    ShippingAddress
}
