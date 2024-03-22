const productRoutes = require ("./product.route.js");
const homeRoutes = require ("./home.route.js");

module.exports= (app) => { //export ra ham
    app.use("/",homeRoutes);

    app.use("/products",productRoutes);
    
    // app.get("/products",(req,res)=>{
    //     //res.send("Trang danh sach san pham");
    //     res.render("client/pages/products/index.pug")
    // });
}

