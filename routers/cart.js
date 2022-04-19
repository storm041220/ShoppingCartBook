const express = require('express');
const router = express.Router();

const {getCartPage, isAuthenticated, addProductToCart, changeAddress} = require('../controllers');

router.get('/', isAuthenticated,getCartPage);
router.post('/', isAuthenticated,addProductToCart,getCartPage);
router.post('/address', isAuthenticated, changeAddress);

module.exports = router;
