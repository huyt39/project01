const express= require("express"); //nhung express
const router = express.Router(); //ham Router trong thu vien express co chuc nang dinh nghia route

const controller = require("../../controllers/client/product.controller.js"); //nhung file product.controller

router.get("/",controller.index);
// router.get("/detail",controller.detail);
// router.get("/edit",controller.edit);
// router.get("/create",controller.create);
// router.get("/detail",(req,res)=>{
//     res.send("Trang chi tiết sản phẩm");
// });
// router.get("/edit",(req,res)=>{
    
// });
// router.get("/create",(req,res)=>{
    
// });

module.exports = router; //export router ra