const express= require("express"); //nhung express
const router = express.Router(); //ham Router trong thu vien express co chuc nang dinh nghia route
const controller= require("../../controllers/client/home.controller");


router.get("/",controller.index);
// router.get("/",(req,res)=>{
//     //res.send("Trang chu");
//     res.render("client/pages/home/index.pug"); //da mac dinh vao thu muc views nen bat dau bang client
// });
module.exports = router;