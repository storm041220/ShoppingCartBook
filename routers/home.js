const express = require('express');
const router = express.Router();

const {getHomepage,isAuthenticated} = require('../controllers');

router.get('/home',isAuthenticated,getHomepage);

module.exports = router;
