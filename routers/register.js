const express = require('express');

const router = express.Router();
const {getRegister, createUser, checkIsLogin} = require('../controllers');
router.get('/',checkIsLogin, getRegister);
router.post('/',createUser);
module.exports = router;
