const users = require('./users');
const customers = require('./customers');
const authorities = require('./authorities');

module.exports= {
    ...users,
    ...customers,
    ...authorities
}
