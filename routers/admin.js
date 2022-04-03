const express = require('express');
const router = express.Router();
const {getAdminPage} = require('../controllers');

router.get('/',getAdminPage);

module.exports = router;
