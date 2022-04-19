const express = require('express');
const router = express.Router();

const {logoutUser} = require('../controllers');

router.get('/' , logoutUser);
module.exports = router;

