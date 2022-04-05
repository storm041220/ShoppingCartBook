const express = require('express');
const router = express.Router();
const {getAdminPage,checkRoleAdmin} = require('../controllers');

router.get('/',checkRoleAdmin,getAdminPage);

module.exports = router;
