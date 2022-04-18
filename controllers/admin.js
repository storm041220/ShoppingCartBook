module.exports = {
  getAdminPage: async function (req, res) {
    return res.render("admin-manageOrder");
  },

  getManageBook: async function (req, res) {
    return res.render("admin-manageBook");
  },

  getManageOrder: async function (req, res) {
    return res.render("admin-manageOrder");
  },

  getFeedback: async function (req, res) {
    return res.render("admin-feedback");
  },
};
