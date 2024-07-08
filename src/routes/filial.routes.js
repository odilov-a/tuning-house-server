const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const filialController = require("../controller/filial.controller.js");
const filialRoutes = Router();

filialRoutes.get("/", filialController.getAllFilial);
filialRoutes.get("/:filialId", filialController.getFilialById);
filialRoutes.post("/", authMiddleware, filialController.createFilial);
filialRoutes.put("/:filialId", authMiddleware, filialController.updateFilial);
filialRoutes.delete(
  "/:filialId",
  authMiddleware,
  filialController.deleteFilial
);

module.exports = filialRoutes;
