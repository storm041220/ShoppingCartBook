const {Customers, Products, Feedbacks} = require('../models');
const {formatProduct} = require('./product');
const getProductDetail = async (req, res) => {
    try {
        //Get user;
        const user = req.user;
        const isModal = req.isModal;
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
        let listFeedback = [];
        const feedbacks = await Feedbacks.find({product_id: product_id});
        for (let item of feedbacks){
            listFeedback.push(formatFeedback(item));
        }
        return res.render('product-detail',{
            isModal: isModal,
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
const postFeedbacks = async (req, res, next) => {
    try {
        const user = req.user;
        const {product_id} = req.params;
        const {title, detail} = req.body;
        let isModal;
        if (user !==0){
            isModal = "Successful response!";
            //created feedback
            const newFeedback = new Feedbacks({
                title: title,
                detail: detail,
                emailId: user.email,
                product_id: product_id
            });
            await newFeedback.save();
        }else {
            isModal = "You need to log in to continue!";
        }
        req.isModal = isModal;
        return next();
    }catch (err) {
        console.log(err);
    }
}
const formatFeedback = (feedback) => {
    return {
        _id: feedback._id,
        title: feedback.title,
        detail: feedback.detail,
        emailId: feedback.emailId,
        product_id: feedback.product_id,
        created_at: feedback.created_at.toDateString()
    }
}
module.exports ={
    getProductDetail,
    postFeedbacks
}
