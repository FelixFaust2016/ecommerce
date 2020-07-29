const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: "String",
    required: 1,
  },
});

module.exports = mongoose.model("Category", categorySchema);
module.exports.categorySchema = categorySchema;
