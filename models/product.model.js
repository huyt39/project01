const mongoose = require("mongoose"); //import mongoose
//tao mot bo khung de khong duoc insert mot cach tu do
const productSchema = new mongoose.Schema({ //tao cac key tuong ung trong db
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean
});

const Product = mongoose.model("Product", productSchema,"products"); //tham so thu 3 la collection trong db

module.exports = Product;
