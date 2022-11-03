const express = require("express");
const cors = require("cors");
const productsRouter = require("./app/routes/product.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

app.get("/", (req, res) => {
    res.json({ message: "Xin chào bạn đến với cửa hàng"});
});

module.exports = app;