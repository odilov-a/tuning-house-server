const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const hashtagController = require("../controller/hashtag.controller.js");
const hashtagRoutes = Router();

hashtagRoutes.get("/", hashtagController.getAllHashtag);
hashtagRoutes.get("/:hashtagId", hashtagController.getHashtagById);
hashtagRoutes.post("/", authMiddleware, hashtagController.createHashtag);
hashtagRoutes.put(
  "/:hashtagId",
  authMiddleware,
  hashtagController.updateHashtag
);
hashtagRoutes.delete(
  "/:hashtagId",
  authMiddleware,
  hashtagController.deleteHashtag
);

module.exports = hashtagRoutes;
