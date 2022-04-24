const express = require("express");
const router = express.Router();
var controller = require('../controllers/admin');
const upload = require("../utils/multer")

router.get("/", controller.getAdminPage);

router.get("/mananger-book", controller.getManageBook);

router.post("/store", upload.single('image'), controller.storeBook);

router.post("/delete-book", controller.deleteBook);

router.post("/update-book",  controller.updateBook);

router.get("/mananger-customer-order", controller.getManageOrder);

router.post("/process-order", controller.processOrder);

router.post("/delete-order", controller.deleteOrder);

router.get("/feedback", controller.getFeedback);

module.exports = router;
