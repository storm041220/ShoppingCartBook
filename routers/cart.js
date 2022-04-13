const express = require('express');
const router = express.Router();

const {getCartPage, isAuthenticated} = require('../controllers');

router.get('/', isAuthenticated,getCartPage);

module.exports = router;
