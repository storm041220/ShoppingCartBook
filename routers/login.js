const express = require('express');

const router = express.Router();

const {getLoginPage,postLogin,checkIsLogin} = require('../controllers');

router.get('/',checkIsLogin,getLoginPage);
router.post('/',postLogin);
module.exports = router;
