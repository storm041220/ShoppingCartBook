const express = require('express');

const router = express.Router();
const {getRegister} = require('../controllers');
router.get('/', getRegister);

module.exports = router;
