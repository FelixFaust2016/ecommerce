const mongoose = require("mongoose");

const { categorySchema } = require("../models/category");

const itensSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 1,
  },
  noInStock: {
    type: Number,
    required: 1,
  },
  description: {
    type: String,
    required: 1,
  },
  price: {
    type: Number,
    required: 1,
  },
  category: {
    type: categorySchema,
    required: 1,
  },
  productImage: {
    type: String,
    required: 1,
  },
  rating: {
    type: Number,
    required: 1,
  },
});

module.exports = mongoose.model("Items", itensSchema);
