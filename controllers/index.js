const home = require('./home');
const auth = require('./auth');
const admin = require('./admin');
const shop = require('./shop-product');
module.exports = {
    ...home,
    ...auth,
    ...admin,
    ...shop
}
