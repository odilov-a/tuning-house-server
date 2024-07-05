const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const blogController = require("../controller/blog.controller.js");
const blogRoutes = Router();

blogRoutes.get("/", blogController.getAllBlog);
blogRoutes.get("/:blogId", blogController.getBlogById);
blogRoutes.post("/", authMiddleware, blogController.createBlog);
blogRoutes.put("/:blogId", authMiddleware, blogController.updateBlog);
blogRoutes.delete("/:blogId", authMiddleware, blogController.deleteBlog);

module.exports = blogRoutes;