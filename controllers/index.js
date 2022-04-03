const home = require('./home');
const auth = require('./auth');
const admin = require('./admin')
module.exports = {
    ...home,
    ...auth,
    ...admin
}
