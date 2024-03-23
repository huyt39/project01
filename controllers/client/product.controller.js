//[TUONG UNG VOI PHUONG THUC GET] /products/
module.exports.index = (req,res)=>{
    res.render("client/pages/products/index.pug",{
        pageTitle: "Danh sách sản phẩm"
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