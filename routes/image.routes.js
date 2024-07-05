const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const imageController = require("../controller/image.controller.js");
const uploadMiddleware = require("../middlewares/upload.middleware.js");

const imageRoutes = Router();

imageRoutes.get("/", authMiddleware, imageController.getAll);
imageRoutes.post("/", authMiddleware, uploadMiddleware, imageController.uploadImage);
imageRoutes.put("/:id", authMiddleware, uploadMiddleware, imageController.editImage);

module.exports = imageRoutes;