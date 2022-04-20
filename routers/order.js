const express = require('express');
const router = express.Router();
const {getPageOrder, postOrder, isAuthenticated} = require('../controllers');
router.get('/',isAuthenticated ,getPageOrder);
router.post('/', isAuthenticated, postOrder, getPageOrder);
module.exports = router;
