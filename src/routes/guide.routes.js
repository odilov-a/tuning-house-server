const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const guideController = require("../controller/guide.controller.js");
const guideRoutes = Router();

guideRoutes.get("/", guideController.getAllGuide);
guideRoutes.get("/:guideId", guideController.getGuideById);
guideRoutes.post("/", authMiddleware, guideController.createGuide);
guideRoutes.put("/:guideId", authMiddleware, guideController.updateGuide);
guideRoutes.delete("/:guideId", authMiddleware, guideController.deleteGuide);

module.exports = guideRoutes;
