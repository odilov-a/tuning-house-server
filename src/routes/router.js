const { Router } = require("express");
const carRoutes = require("./car.routes.js");
const userRoutes = require("./user.routes.js");
const blogRoutes = require("./blog.routes.js");
const guideRoutes = require("./guide.routes.js");
const productRoutes = require("./product.routes.js");
const catalogRoutes = require("./catalog.routes.js");
const hashtagRoutes = require("./hashtag.routes.js");
const categoryRoutes = require("./category.routes.js");
const translationRoutes = require("./translation.routes.js");
const subcategoryRoutes = require("./subcategory.routes.js");
const notificationRoutes = require("./notification.routes.js");
const router = Router();

router.use("/cars", carRoutes);
router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/hashtags", hashtagRoutes);
router.use("/products", productRoutes);
router.use("/catalogs", catalogRoutes);
router.use("/guidelines", guideRoutes);
router.use("/categories", categoryRoutes);
router.use("/translations", translationRoutes);
router.use("/subcategories", subcategoryRoutes);
router.use("/notifications", notificationRoutes);

module.exports = router;
