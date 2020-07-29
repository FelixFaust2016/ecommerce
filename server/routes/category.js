const router = require("express").Router();

const handlers = require("../handlers")

router
  .route("/")
  .get(handlers.getCat)
  .post(handlers.addCat);

module.exports = router;
