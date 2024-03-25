const express = require("express"); //nhung express
const dotenv = require("dotenv"); //import dotenv tu thu vien dotenv
// const mongoose = require("mongoose");
const routesClient=require("./routes/client/index.route.js"); //loi ham route client vao
const database = require("./config/database.js");

require("dotenv").config(); //de cau hinh

database.connect();

// mongoose.connect('mongodb://localhost:27017/product-management')
// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log('Connected!'));


const app = express(); //khoi tao app dung express

const port = process.env.PORT;
//   const port = 3000; //khoi tao cong

app.set("views", "./views"); //giao dien
app.set("view engine", "pug");

app.use(express.static('public')); //de nhung file tinh vao, day la code cua FE


//Routes client:
routesClient(app);

//router:
// app.get("/",(req,res)=>{
//     //res.send("Trang chu");
//     res.render("client/pages/home/index.pug"); //da mac dinh vao thu muc views nen bat dau bang client
// }
// );

// app.get("/products",(req,res)=>{
//     //res.send("Trang danh sach san pham");
//     res.render("client/pages/products/index.pug")
// })

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
}
    ); //chay server

