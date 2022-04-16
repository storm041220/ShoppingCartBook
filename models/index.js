const users = require('./users');
const customers = require('./customers');
const authorities = require('./authorities');
const product = require('./products');
const feedbacks = require('./feedbacks');
const cart = require('./cart');
const cartItem = require('./cartItem');
module.exports= {
    ...users,
    ...customers,
    ...authorities,
    ...product,
    ...feedbacks,
    ...cart,
    ...cartItem
}
