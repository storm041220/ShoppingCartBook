const home = require('./home');
const auth = require('./auth');
const admin = require('./admin');
const shop = require('./shop-product');
const product_detail = require('./product-detail');
const cart = require('./cart');
const order = require('./order')
module.exports = {
    ...home,
    ...auth,
    ...admin,
    ...shop,
    ...product_detail,
    ...cart,
    ...order
}
