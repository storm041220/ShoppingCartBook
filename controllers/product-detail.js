const {Customers, Products} = require('../models');
const {formatProduct} = require('./product');
const getProductDetail = async (req, res) => {
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
        //Get detail product
        const {product_id} = req.params;
        const detailProduct = await Products.findOne({_id: product_id});
        const product = formatProduct(detailProduct);
        const listFeedback = [
            {
                title: 'Get the best seller at a great price.',
                detail: 'I read this book shortly after I got it and didn\'t just put it on my TBR shelf mainly because I saw it on Reese Witherspoon\'s bookclub September read. It was one of the best books I\'ve read this year, and reminded me some of Kristen Hannah\'s The Great Alone.'
            },
            {
                title: 'Get the best seller at a great price.',
                detail: 'I read this book shortly after I got it and didn\'t just put it on my TBR shelf mainly because I saw it on Reese Witherspoon\'s bookclub September read. It was one of the best books I\'ve read this year, and reminded me some of Kristen Hannah\'s The Great Alone.'
            },
            {
                title: 'Get the best seller at a great price.',
                detail: 'I read this book shortly after I got it and didn\'t just put it on my TBR shelf mainly because I saw it on Reese Witherspoon\'s bookclub September read. It was one of the best books I\'ve read this year, and reminded me some of Kristen Hannah\'s The Great Alone.'
            }
        ];
        return res.render('product-detail',{
            product: product,
            username: username,
            listFeedback: listFeedback,
            style: 'product-detail.css',
            js: 'product-detail.js'
        });
    }catch (err) {
        console.log(err);
    }
}
module.exports ={
    getProductDetail
}
