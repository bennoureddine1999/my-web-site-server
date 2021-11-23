const controller = require("./controller");
const express = require("express");
const router = express.Router();
const validator = require("../../validator/userValidator");
const validator1 = require("../../validator/login");

//const middlewere = require("../../hourMiddlewere.js/hourMiddlewere");
//const auth = require("../../hourMiddlewere.js/auth");

router
  .get("/", /*middlewere.verifyNight, auth.verifyToken,*/ controller.getUser)
  .get("/:id", controller.getUserById)
  .post("/", validator.validatePost, controller.createUser)
  .post("/login", validator1.validatelogin, controller.login)
  .post("/email", controller.getUserByEmail)
  .put("/:id", validator.validatePost, controller.updatUser)
  .delete("/:id", controller.deleteUser);

module.exports = router;
