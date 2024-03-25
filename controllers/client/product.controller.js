const Product = require("../../models/product.model");

//[TUONG UNG VOI PHUONG THUC GET] /products/
module.exports.index = async (req,res)=>{
    const products = await Product.find({
        status: "active",
        deleted: false
    }); //tim ra nhung san pham co status=inactive 
    for (const item of products){ //lap qua tung phan tu trong mang de tinh gia moi
        item.priceNew = item.price * (1-item.discountPercentage/100);
        item.priceNew = item.priceNew.toFixed(0);
    }
    console.log(products);
    res.render("client/pages/products/index.pug",{
        pageTitle: "Danh sách sản phẩm",
        products: products
    });
}//ten ham la index

//[TUONG UNG VOI PHUONG THUC GET] /products/detail
module.exports.detail = (req,res)=>{
    res.send("Trang chi tiết sản phẩm");
}

//[TUONG UNG VOI PHUONG THUC GET] /products/edit
module.exports.edit = (req,res)=> {

}

//[TUONG UNG VOI PHUONG THUC GET] /products/create
module.exports.create = (req,res) =>{

}