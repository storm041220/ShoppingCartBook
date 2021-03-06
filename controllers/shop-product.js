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
        //Get list product
        let default_sort = '';
        let low_sort = '';
        let high_sort = ''
        let listProduct = [];
        const {sort} = req.query;
        let products;
        if (sort){
            if (sort === 'lowtohigh'){
                products = await Products.find().sort([['price', 1]]);
                low_sort='selected';
            }else {
                products = await Products.find().sort([['price', -1]]);
                high_sort = 'selected';
            }
        }else {
            products = await Products.find();
            default_sort = 'selected';
        }
        for (let item of products){
            listProduct.push(formatProduct(item));
        }
        return res.render('shop',
            {
                username: username,
                style: 'shop.css',
                active_shop:'active-nav',
                listProduct: listProduct,
                js: 'shop.js',
                count: listProduct.length,
                default_sort: default_sort,
                low_sort: low_sort,
                high_sort: high_sort
            });
    }catch (err) {
        console.log(err);
    }
}

const getProductBySearch = async (req, res) => {
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
        //Get list product
        let listProduct = [];
        let products;
        const {type_search} = req.params;
        const {value} = req.query;
        if (type_search === "category"){
            products = await Products.find({category: value});
        }else if (type_search === "price"){
            const arr = value.split('from');
            const valueRange =  arr.map((element, index) => {
                return Number(element);
            });
            products = await Products.find({
                price: {
                    $gte: valueRange[0],
                    $lt: valueRange[1]
                }
            });
        }else {
            console.log("search");
        }
        for (let item of products){
            listProduct.push(formatProduct(item));
        }
        return res.render('shop',
            {
                username: username,
                style: 'shop.css',
                active_shop:'active-nav',
                listProduct: listProduct,
                js: 'shop.js',
                count: listProduct.length
            });
    }catch (err) {
        console.log(err);
    }
}
module.exports = {
    getProductOfShop,
    getProductBySearch
}
