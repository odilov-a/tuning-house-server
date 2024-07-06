const { Router } = require("express");
const carRoutes = require("./car.routes.js");
const userRoutes = require("./user.routes.js");
const blogRoutes = require("./blog.routes.js");
const guideRoutes = require("./guide.routes.js");
const categoryRoutes = require("./category.routes.js");
const translationRoutes = require("./translation.routes.js");
const subcategoryRoutes = require("./subcategory.routes.js");
const router = Router();

router.use("/cars", carRoutes);
router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/guidelines", guideRoutes);
router.use("/categories", categoryRoutes);
router.use("/translations", translationRoutes);
router.use("/subcategories", subcategoryRoutes);

module.exports = router; 