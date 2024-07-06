const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const catalogController = require("../controller/catalog.controller.js");
const catalogRoutes = Router();

catalogRoutes.get("/", catalogController.getAllCatalog);
catalogRoutes.get("/:catalogId", catalogController.getCatalogById);
catalogRoutes.post("/", authMiddleware, catalogController.createCatalog);
catalogRoutes.put("/:catalogId", authMiddleware, catalogController.updateCatalog);
catalogRoutes.delete("/:catalogId", authMiddleware, catalogController.deleteCatalog);

module.exports = catalogRoutes;