const mongoose = require("mongoose");
const { model } = require("./users");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ecommerce");

module.exports.User = require("./users");
module.exports.Category = require("./category");
module.exports.Items = require("./items");
module.exports.Cart = require("./cart");
