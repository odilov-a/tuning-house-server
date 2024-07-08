const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const serviceController = require("../controller/service.controller.js");
const serviceRoutes = Router();

serviceRoutes.get("/", serviceController.getAllService);
serviceRoutes.get("/:serviceId", serviceController.getServiceById);
serviceRoutes.post("/", authMiddleware, serviceController.createService);
serviceRoutes.put(
  "/:serviceId",
  authMiddleware,
  serviceController.updateService
);
serviceRoutes.delete(
  "/:serviceId",
  authMiddleware,
  serviceController.deleteService
);

module.exports = serviceRoutes;
