const express  = require('express');
const router = express.Router();

const {getProductOfShop, isAuthenticated, getProductBySearch} = require('../controllers');

router.get('/', isAuthenticated,getProductOfShop);
router.get('/:type_search',isAuthenticated,getProductBySearch);
module.exports = router;
