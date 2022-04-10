const express = require('express');

const router = express.Router();
const {getProductDetail} = require('../controllers');
router.get('/', getProductDetail);

module.exports = router;
