const getProductOfShop = async (req, res) => {
    try {
        const listProduct = [
            {
                id: 1,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$'
            },
            {
                id: 2,
                name: 'The Overdue Life of Amy Byler Amy Byler',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$'
            },
            {
                id: 3,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$'
            },
            {
                id: 4,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$'
            },
            {
                id: 5,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$'
            },
            {
                id: 6,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$'
            },
            {
                id: 7,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$'
            },
            {
                id: 8,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$'
            },
            {
                id: 9,
                name: 'Where the Crawdads Sing',
                image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649320740/product_1_nkgqym.jpg',
                manufacturer: 'Anna Banks',
                price: 29,
                unitStock: '$'
            }
        ];
        return res.render('shop',
            {
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
