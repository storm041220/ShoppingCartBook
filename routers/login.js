const express = require('express');

const router = express.Router();

const {getLoginPage,postLogin} = require('../controllers');

router.get('/',getLoginPage);
router.post('/',postLogin);
module.exports = router;
