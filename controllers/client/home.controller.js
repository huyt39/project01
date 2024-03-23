//[TUONG UNG VOI PHUONG THUC GET] /
module.exports.index = (req,res)=>{
    res.render("client/pages/home/index.pug",{
        pageTitle: "Trang chủ" //tra ra title 
    })
}