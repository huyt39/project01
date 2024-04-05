const dashboardRoutes = require("./dashboard.route");
const productRoutes = require("./product.route");
const systemConfig = require("../../config/system.js");
module.exports= (app) => { 
    //se co rat nhieu routes nen phai toi uu=>tao file chua cac bien 
    // app.use("/admin/dashboard",dashboardRoutes); //dinh nghia routes
    const PATH_ADMIN = `/${systemConfig.prefixAdmin}`;
    app.use(`${PATH_ADMIN}/dashboard`,dashboardRoutes);
    app.use(`${PATH_ADMIN}/products`, productRoutes);

    
    
}

