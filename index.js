const app = require("./app");
const mongoose = require("mongoose");
const config = require("./config");

mongoose
  .connect(config.DB.URL, config.DB.CONFIG)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));
console.log(config.DB.URL);

const server = app.listen(config.port, "0.0.0.0", async () => {
  console.log("server running port " + config.port);
});
