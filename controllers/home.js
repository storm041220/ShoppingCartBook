
const getHomepage = async (req, res) => {
    res.render('home',{user: "Lam"});
}
module.exports = {
    getHomepage
}
