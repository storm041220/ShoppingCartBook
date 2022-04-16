const express = require('express');
const router = express.Router();

const {getCartPage, isAuthenticated, addProductToCart} = require('../controllers');

router.get('/', isAuthenticated,getCartPage);
router.post('/', isAuthenticated,addProductToCart,getCartPage);

module.exports = router;
