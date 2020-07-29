const router = require("express").Router();

const handlers = require("../handlers");
const auth = require("../middlewares/auth");

router.route("/").get(handlers.getCart).post(auth, handlers.addToCart);

module.exports = router;
