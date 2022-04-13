const express  = require('express');
const router = express.Router();

const {getProductOfShop, isAuthenticated} = require('../controllers');

router.get('/', isAuthenticated,getProductOfShop);
module.exports = router;
