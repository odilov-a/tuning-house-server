const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const imageController = require("../controller/image.controller.js");
const upload = require("../middlewares/multer.config.js");
const imageRoutes = Router();

imageRoutes.get("/upload", imageController.getAll);
imageRoutes.post("/upload", upload.single("images"), imageController.uploadImage);
imageRoutes.put("/upload/:id", authMiddleware, upload.single("images"), imageController.editImage);
imageRoutes.delete("/upload/:id", authMiddleware, imageController.deleteImage);

module.exports = imageRoutes;