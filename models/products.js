const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

const productSchema = new mongoose.Shema({
    category: {
        type: String
    },
    description: {
        type: String
    },
    manufacturer: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    unitStock: {
        type: String
    },
    image: {
        type: String
    },
    status: {
        type: String
    },
    quantity: {
        type: String
    }
});
autoIncrement.initialize(mongoose.connection);

productSchema.plugin(autoIncrement.plugin, 'products');
const Products = mongoose.model('Products', productSchema, 'products');

module.exports = {
    Products
}
