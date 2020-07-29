const db = require("../models");
const multer = require("multer");

exports.getItem = async (req, res, next) => {
  try {
    const items = await db.Items.find();
    res.status(200).json(items);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.addItem = async (req, res, next) => {
  try {
    const category = await db.Category.findById(req.body.categoryId);
    if (!category) return res.json("Could not find Id").status(404);

    let item = new db.Items({
      name: req.body.name,
      noInStock: req.body.noInStock,
      category: {
        _id: category._id,
        name: category.name
      },
      productImage: req.file.path,
      description: req.body.description,
      rating: req.body.rating,
      price: req.body.price,
    });
    item = await item.save();
    res.json(item).status(200);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.getAnItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await db.Items.findById(id);

    if (!item) throw new Error("No game found");

    res.status(200).json(item);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

// exports.deleteDoctor = async(req, res, next) => {

// }
