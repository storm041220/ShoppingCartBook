const {
  ShippingAddress,
  Products,
  Customers,
  Order,
  OrderDetail,
  Feedbacks
} = require("../models");
const cloudinary = require("../utils/cloudinary");
const { formatProduct } = require("./product");
module.exports = {
  getAdminPage: async function (req, res) {
    res.render("admin-manageBook");
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
    let listOrder = [];
    const orders = await Order.find();
    for (let item of orders) {
      const user = await Customers.findOne({ _id: item.customer_id });
      const address = await ShippingAddress.findOne({
        _id: item.shippingAddress_id,
      });
      let listDetail = [];
      const orderDetail = await OrderDetail.find({ order_id: item._id });
      for (let detail of orderDetail) {
        const product = await Products.findOne({ _id: detail.product_id });
        listDetail.push({
          name: product.name,
          image: product.image,
          quantity: detail.quantity,
          manufacturer: product.manufacturer,
        });
      }
      listOrder.push({
        id: item._id,
        userName: user.firstName + " " + user.lastName,
        shippingAddress:
            address.address +
            ", " +
            address.country +
            ", " +
            address.state +
            ", " +
            address.city,
        totalPrice: item.totalPrice,
        products: listDetail,
        status: item.status,
      });
    }
    res.render("admin-manageOrder", { orders: listOrder });
  },

  getFeedback: async function (req, res) {
    let listFeedBack = [];
    const feedbacks = await Feedbacks.find();
    for(let item of feedbacks){
      const user = await Customers.findOne({ userEmailId: item.emailId});
      if(item.emailId !== 'admin@gmail.com'){
        listFeedBack.push({
          id: item._id,
          nameUser: user.firstName + " " + user.lastName,
          title: item.title,
          detail: item.detail,
          date: item.created_at.toDateString(),
          product_id: item.product_id,
          mail: item.emailId,
          role: item.role
        });
      }
    }
    res.render("admin-feedback", {feedbacks: listFeedBack});
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
      res.redirect("mananger-book");
    } catch (error) {
      res.json(error);
    }
  },
  updateBook: async function (req, res) {
    await Products.updateOne({ _id: req.body._id }, req.body);
    res.redirect("mananger-book");
  },
  deleteBook: async function (req, res) {
    await Products.findByIdAndDelete(req.body.id_detele);
    res.redirect("mananger-book");
  },

  processOrder: async function(req, res){
    await Order.updateOne({ _id: req.body.id }, {status: req.body.status});
    res.redirect("mananger-customer-order");
  },

  deleteOrder: async function(req, res){
    await Order.findByIdAndDelete(req.body.id_detele);
    await OrderDetail.deleteMany({order_id: req.body.id_detele });
    res.redirect("mananger-customer-order");
  },

  storeFeedback: async function(req, res){
    try {
      let repFeedback = new Feedbacks({
        product_id: req.body.product_id,
        role: req.body.role,
        emailId: 'admin@gmail.com',
        feedback_id: req.body.feedback_id,
        detail: req.body.detail,
      });
      await repFeedback.save();
      res.redirect("feedback");
    } catch (error) {
      res.json(error);
    }
  }
};
