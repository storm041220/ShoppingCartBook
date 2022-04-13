const {Products,Customers} = require('../models');
const {formatProduct} = require('./product');
const getProductOfShop = async (req, res) => {
    try {
        //Get user;
        const user = req.user;
        let username;
        if (user !==0){
            const customer = await Customers.findOne({userEmailId: user.email});
            username = customer.firstName + " "+customer.lastName;
        }else {
            username = undefined;
        }
        let listProduct = [];
        const products = await Products.find();
        for (let item of products){
            listProduct.push(formatProduct(item));
        }
        return res.render('shop',
            {
                username: username,
                style: 'shop.css',
                active_shop:'active-nav',
                listProduct: listProduct,
                js: 'shop.js'
            });
    }catch (err) {
        console.log(err);
    }
}
module.exports = {
    getProductOfShop
}
