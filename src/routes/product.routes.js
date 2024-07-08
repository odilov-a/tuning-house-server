const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const productController = require("../controller/product.controller.js");
const productRoutes = Router();

productRoutes.get("/", productController.getAllProduct);
productRoutes.get("/filter", productController.filterProduct);
productRoutes.get("/:productId", productController.getProductById);
productRoutes.post("/", authMiddleware, productController.createProduct);
productRoutes.put(
  "/:productId",
  authMiddleware,
  productController.updateProduct
);
productRoutes.delete(
  "/:productId",
  authMiddleware,
  productController.deleteProduct
);

module.exports = productRoutes;
