const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Items",
  },
  numberOfItem: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
module.exports.cartSchema = cartSchema;
