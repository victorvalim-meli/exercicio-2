const express = require("express");
const productRoutes = require("./productRoutes");
let products = require('./products')

const PORT = 8080
const NUMBER_ZERO = 0

const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);


app.listen(PORT, () => console.log("Its working!!!!"))