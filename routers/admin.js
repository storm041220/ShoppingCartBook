const express = require("express");
const router = express.Router();
var controller = require('../controllers/admin');

router.get("/", controller.getAdminPage);
router.get("/mananger-book", controller.getManageBook);

router.get("/manange-customer-order", controller.getManageOrder);

router.get("/feedback", controller.getFeedback);

module.exports = router;
