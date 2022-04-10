const home = require('./home');
const auth = require('./auth');
const admin = require('./admin');
const shop = require('./shop-product');
const product_detail = require('./product-detail');
module.exports = {
    ...home,
    ...auth,
    ...admin,
    ...shop,
    ...product_detail
}
