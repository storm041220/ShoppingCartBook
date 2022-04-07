
const cookie = require('js-cookie');
const getHomepage = async (req, res) => {
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
        }
    ];
    const listProductFeatured = [
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
    const listProductOnSale = [
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
    const listProductViewMost = [
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
    return res.render('home',
        {user: cookie.get('token'),
            style: 'home.css',
            categories: categories,
            active_home: 'active-nav',
            listProduct: listProduct,
            listProductFeatured: listProductFeatured,
            listProductOnSale:listProductOnSale,
            listProductViewMost: listProductViewMost});
}
module.exports = {
    getHomepage
}
