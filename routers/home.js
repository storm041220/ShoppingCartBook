const express = require('express');
const router = express.Router();

const {getHomepage} = require('../controllers');

router.get('/home',getHomepage);

module.exports = router;
