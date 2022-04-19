const { Products } = require("../models");
const {formatProduct} = require('./product');
module.exports = {
  getAdminPage: async function (req, res) {
    res.render("admin-manageOrder");
  },

  getManageBook: async function (req, res) {
    let products = [];
    const findProduct = await Products.find();
    for (let item of findProduct){
      products.push(formatProduct(item));
    }
    res.render("admin-manageBook", {
      products: products
    });
  },

  getManageOrder: async function (req, res) {
    res.render("admin-manageOrder");
  },

  getFeedback: async function (req, res) {
    res.render("admin-feedback");
  },
};
