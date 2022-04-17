const express = require('express');
const router = express.Router();
const {getPageOrder} = require('../controllers');
router.get('/', getPageOrder);

module.exports = router;
