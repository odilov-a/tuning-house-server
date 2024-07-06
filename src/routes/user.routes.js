const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const userController = require("../controller/user.controller.js");
const userRoutes = Router();

userRoutes.get("/get-me", authMiddleware, userController.getMe);
userRoutes.post("/login", userController.login);
userRoutes.post("/register", userController.register);
userRoutes.post("/request-verification-code", userController.requestVerificationCode);
userRoutes.post("/verify-code-reset-password", userController.verifyCodeAndResetPassword);
userRoutes.put("/update-user", authMiddleware, userController.updateUser);

module.exports = userRoutes;