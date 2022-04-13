const {Customers} = require('../models')

const getCartPage = async (req, res) => {
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
        const productOfCart = [
            {
                id: 1,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$',
                quantity: 2,
                total: 29*2
            },
            {
                id: 2,
                name: 'The Overdue Life of Amy Byler Amy Byler',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$',
                quantity: 2,
                total: 29*2
            },
            {
                id: 3,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$',
                quantity: 2,
                total: 29*2
            }
        ];
        return res.render('cart', {
            username: username,
            style: 'cart.css',
            js: 'cart.js',
            productOfCart: productOfCart,
            active_cart: 'active-nav'

        })
    }catch (err) {
        console.log(err);
    }
}
module.exports = {
    getCartPage
}
