const express = require('express');
const router = express.Router();

const {getCartPage, isAuthenticated, addProductToCart, changeAddress, deleteProductOfCart} = require('../controllers');

router.get('/', isAuthenticated,getCartPage);
router.post('/', isAuthenticated,addProductToCart,getCartPage);
router.post('/address', isAuthenticated, changeAddress);
router.post('/delete/:id', isAuthenticated,deleteProductOfCart);
module.exports = router;
