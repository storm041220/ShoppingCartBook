const users = require('./users');
const customers = require('./customers');
const authorities = require('./authorities');
const product = require('./products');
const feedbacks = require('./feedbacks');
module.exports= {
    ...users,
    ...customers,
    ...authorities,
    ...product,
    ...feedbacks
}
