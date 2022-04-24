const express = require("express");
const router = express.Router();
var controller = require('../controllers/admin');
const upload = require("../utils/multer");
const {checkRoleAdmin} = require('../controllers');

router.get("/", checkRoleAdmin,controller.getAdminPage);

router.get("/mananger-book", checkRoleAdmin,controller.getManageBook);

router.post("/store", upload.single('image'), controller.storeBook);

router.post("/delete-book", controller.deleteBook);

router.post("/update-book",  controller.updateBook);

router.get("/mananger-customer-order",checkRoleAdmin, controller.getManageOrder);

router.post("/process-order", controller.processOrder);

router.post("/delete-order", controller.deleteOrder);

router.get("/feedback",checkRoleAdmin, controller.getFeedback);

router.post("/rep-feedback", controller.storeFeedback);

module.exports = router;
