const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const subcategoryController = require("../controller/subcategory.controller.js");
const subcategoryRoutes = Router();

subcategoryRoutes.get("/", subcategoryController.getAllSubcategory);
subcategoryRoutes.get("/filter", subcategoryController.filterSubcategory);
subcategoryRoutes.get(
  "/:subcategoryId",
  subcategoryController.getSubcategoryById
);
subcategoryRoutes.post(
  "/",
  authMiddleware,
  subcategoryController.createSubcategory
);
subcategoryRoutes.put(
  "/:subcategoryId",
  authMiddleware,
  subcategoryController.updateSubcategory
);
subcategoryRoutes.delete(
  "/:subcategoryId",
  authMiddleware,
  subcategoryController.deleteSubcategory
);

module.exports = subcategoryRoutes;
