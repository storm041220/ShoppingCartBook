const {Customers, Products} = require('../models');
const {formatProduct} = require('./product')
const getHomepage = async (req, res) => {
    //Get user;
    const user = req.user;
    let username;
    if (user !==0){
        const customer = await Customers.findOne({userEmailId: user.email});
        username = customer.firstName + " "+customer.lastName;
    }else {
        username = undefined;
    }
    //Get new product
    let listNewProduct = [];
    const newProducts = await Products.find().sort({'_id': -1}).limit(5);
    for (let item of newProducts){
        listNewProduct.push(formatProduct(item));
    }
    const categories = [
        {
            id: 1,
            class: 'item-photo',
            class_icon: 'bi bi-images',
            name: 'Arts & Photography'
        },
        {
            id: 2,
            class: 'item-food',
            class_icon: 'bi bi-cup-straw',
            name: 'Food & Drink'
        },
        {
            id: 3,
            class: 'item-romance',
            class_icon: 'bi bi-hearts',
            name: 'Romance'
        },
        {
            id: 4,
            class: 'item-health',
            class_icon: 'bi bi-hospital',
            name: 'Health'
        },
        {
            id: 5,
            class: 'item-biography',
            class_icon: 'bi bi-journal-text',
            name: 'Biography'
        }
    ];
    //Get product featured
    let listProductFeatured = [];
    const productsFeatured = await Products.find({status: 'featured'});
    for (let item of productsFeatured){
        listProductFeatured.push(formatProduct(item));
    }
    //Get product sale
    let listProductOnSale = [];
    const productSale = await Products.find({status: 'sale'});
    for (let item of productSale){
        listProductOnSale.push(formatProduct(item));
    }
    //Get product most view
    let listProductViewMost = [];
    const productMostView = await Products.find({status: 'most-view'});
    for (let item of productMostView){
        listProductViewMost.push(formatProduct(item));
    }
    return res.render('home',
        {   username: username,
            style: 'home.css',
            categories: categories,
            active_home: 'active-nav',
            listNewProduct: listNewProduct,
            listProductFeatured: listProductFeatured,
            listProductOnSale:listProductOnSale,
            listProductViewMost: listProductViewMost});
}
module.exports = {
    getHomepage
}
