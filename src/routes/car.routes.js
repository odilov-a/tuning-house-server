const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const carController = require("../controller/car.controller.js");
const carRoutes = Router();

carRoutes.get("/", carController.getAllCars);
carRoutes.get("/:carId", carController.getCarsById);
carRoutes.post("/", authMiddleware, carController.createCar);
carRoutes.put("/:carId", authMiddleware, carController.updateCar);
carRoutes.delete("/:carId", authMiddleware, carController.deleteCar);

module.exports = carRoutes;
