const {Customers, Products, CartItem, Cart} = require('../models')
const {Country,City,State} = require('country-state-city');
const getCartPage = async (req, res) => {
    try {
        //Get user;
        let productOfCart = [];
        const user = req.user;
        let username;
        if (user !==0){
            const customer = await Customers.findOne({userEmailId: user.email});
            username = customer.firstName + " "+customer.lastName;
            const cart = await Cart.findOne({_id: customer.cart_id});
            const itemCart = await CartItem.find({cart_id: customer.cartId});
            for (let item of itemCart){
                productOfCart.push(await formatItemOfCart(item));
            }
        }else {
            username = undefined;
            return res.redirect('/auth/login');
        }
        return res.render('cart', {
            username: username,
            style: 'cart.css',
            js: 'cart.js',
            count: productOfCart.length,
            productOfCart: productOfCart,
            active_cart: 'active-nav'
        })
    }catch (err) {
        console.log(err);
    }
}
const addProductToCart = async (req, res, next) => {
    try {
        const user = req.user;
        const {product_id, quantity} = req.body;
        console.log(product_id);
        if (user !== 0){
            const customer = await Customers.findOne({userEmailId: user.email});
            const product = await Products.findOne({_id: Number(product_id)});
            const newItem = new CartItem({
                quantity: quantity,
                price: Number(quantity)*product.price,
                cart_id: customer.cartId,
                product_id: Number(product_id)
            });
            newItem.save();
            return next();
        }else {
            return res.redirect('/auth/login');
        }
    }catch (err) {
        console.log(err);
    }
}
const formatItemOfCart = async (item) =>{
    try {
        const product = await Products.findOne({_id: item.product_id});
        return {
            id: item._id,
            name: product.name,
            image: product.image,
            manufacturer: product.manufacturer,
            price: product.price,
            unitStock: product.unitStock,
            quantity: item.quantity,
            total: item.price
        }
    }catch (err) {
        console.log(err);
    }
}
module.exports = {
    getCartPage,
    addProductToCart
}
