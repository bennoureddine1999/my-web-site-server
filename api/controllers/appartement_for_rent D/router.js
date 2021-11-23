const controller = require("./controller");
const express = require("express");
const router = express.Router();
const validator = require("../../validator/A_F_R_D");

router
  .get("/", controller.getA_F_R_D)
  .get("/:id", controller.getgetA_F_R_DById)
  .post("/findcard", controller.get_AFRD_BYuserId)
  .post("/", validator.A_F_R_D_validator, controller.creatA_F_R_D)
  .put("/:id", validator.A_F_R_D_validator, controller.updatA_F_R_D)
  .delete("/:id", controller.deletA_F_R_D);

module.exports = router;
