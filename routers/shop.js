const express  = require('express');
const router = express.Router();

const {getProductOfShop} = require('../controllers');

router.get('/', getProductOfShop);
module.exports = router;
