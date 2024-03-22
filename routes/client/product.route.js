const express= require("express"); //nhung express
const router = express.Router(); //ham Router trong thu vien express co chuc nang dinh nghia route

router.get("/",(req,res)=>{
    //res.send("Trang danh sach san pham");
    res.render("client/pages/products/index.pug")
});
// router.get("/detail",(req,res)=>{
//     res.send("Trang chi tiết sản phẩm");
// });
// router.get("/edit",(req,res)=>{
    
// });
// router.get("/create",(req,res)=>{
    
// });

module.exports = router; //export router ra