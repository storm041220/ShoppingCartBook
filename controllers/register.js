
const getRegister = async (req, res) => {
    res.render('register',{
        style: 'register.css',
        js:'register.js'
    });
}
module.exports = {
    getRegister
}
