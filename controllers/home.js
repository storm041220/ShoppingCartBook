
const cookie = require('js-cookie');
const getHomepage = async (req, res) => {
    res.render('home',{user: cookie.get('token')});
}
module.exports = {
    getHomepage
}
