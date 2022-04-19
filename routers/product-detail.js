const express = require('express');

const router = express.Router();
const {getProductDetail, isAuthenticated, postFeedbacks} = require('../controllers');
router.get('/:product_id', isAuthenticated,getProductDetail);

router.post('/:product_id',isAuthenticated,postFeedbacks,getProductDetail);

module.exports = router;
