const db = require("../models");

exports.getCat = async (req, res, next) => {
  try {
    const category = await db.Category.find();
    res.status(200).json(category);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.addCat = async (req, res, next) => {
  try {
    const category = await db.Category.create(req.body);

    res.status(201).json(category);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
