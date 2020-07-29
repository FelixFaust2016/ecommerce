require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const handle = require("./handlers");
const routes = require("./routes");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("hello all!!!");
});
app.use("/api/auth", routes.auth);
app.use("/api/category", routes.category);
app.use("/api/items", routes.items);
app.use("/api/cart", routes.cart);

app.use(handle.notFound);
app.use(handle.errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, console.log(`Server is running on port ${port}`));
