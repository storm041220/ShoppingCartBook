const express = require('express');
const router = express.Router();

const {getCartPage} = require('../controllers');

router.get('/', getCartPage);

module.exports = router;
