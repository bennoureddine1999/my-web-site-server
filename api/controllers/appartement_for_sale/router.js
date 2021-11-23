const controller = require("./controller");
const express = require("express");
const router = express.Router();
const validator = require("../../validator/A_F_S");

router
  .get("/", controller.getA_F_S)
  .get("/:id", controller.getgetA_F_SById)
  .post("/findcard", controller.get_AFS_BYuserId)
  .post("/", validator.A_F_Svalidator, controller.creatA_F_S)
  .put("/:id", validator.A_F_Svalidator, controller.updatA_F_S)
  .delete("/:id", controller.deletA_F_S);

module.exports = router;
