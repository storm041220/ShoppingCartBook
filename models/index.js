const users = require('./users');
const customers = require('./customers');
const authorities = require('./authorities');
const product = require('./products')
module.exports= {
    ...users,
    ...customers,
    ...authorities,
    ...product
}
