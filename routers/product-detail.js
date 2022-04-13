const express = require('express');

const router = express.Router();
const {getProductDetail, isAuthenticated} = require('../controllers');
router.get('/:product_id', isAuthenticated,getProductDetail);

module.exports = router;
