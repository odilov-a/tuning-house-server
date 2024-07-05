const { Router } = require("express");
const translationController = require("../controller/translation.controller");
const translationRouter = Router();

translationRouter.get("/", translationController.getAll);
translationRouter.get("/:lang", translationController.findByLang);
translationRouter.get("/search/:message", translationController.search);
translationRouter.post("/:lang", translationController.create);
translationRouter.put("/:id", translationController.update);

module.exports = translationRouter;