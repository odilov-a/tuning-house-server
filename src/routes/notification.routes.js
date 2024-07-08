const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const notificationController = require("../controller/notification.controller.js");
const notificationRoutes = Router();

notificationRoutes.get("/", notificationController.getAllNotifications);
notificationRoutes.get(
  "/:notificationId",
  notificationController.getNotificationById
);
notificationRoutes.post(
  "/",
  authMiddleware,
  notificationController.createNotification
);
notificationRoutes.put(
  "/:notificationId",
  authMiddleware,
  notificationController.updateNotification
);
notificationRoutes.delete(
  "/:notificationId",
  authMiddleware,
  notificationController.deleteNotification
);

module.exports = notificationRoutes;
