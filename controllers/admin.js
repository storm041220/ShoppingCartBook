const { Products } = require("../models");
const cloudinary = require("../utils/cloudinary");
const { formatProduct } = require("./product");
module.exports = {
  getAdminPage: async function (req, res) {
    res.render("admin-manageOrder");
  },

  getManageBook: async function (req, res) {
    let products = [];
    const findProduct = await Products.find();
    for (let item of findProduct) {
      products.push(formatProduct(item));
    }
    res.render("admin-manageBook", {
      products: products,
    });
  },

  getManageOrder: async function (req, res) {
    res.render("admin-manageOrder");
  },

  getFeedback: async function (req, res) {
    res.render("admin-feedback");
  },

  storeBook: async function (req, res) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      let product = new Products({
        category: req.body.category,
        description: req.body.description,
        manufacturer: req.body.manufacturer,
        name: req.body.name,
        price: req.body.price,
        unitStock: req.body.unitStock,
        image: result.secure_url,
        status: req.body.status,
        quantity: req.body.quantity,
      });
      await product.save();
      res.redirect('mananger-book');
    } catch (error) {}
  },
  deleteBook: async function (req, res) {
    await Products.findByIdAndDelete(req.body.id_detele);
    res.redirect('mananger-book');
  },
};
