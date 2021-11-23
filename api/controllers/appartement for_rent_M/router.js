const controller = require("./controller");
const express = require("express");
const router = express.Router();
const validator = require("../../validator/A_F_R_M");

router
  .get("/", controller.getA_F_R_M)
  .get("/:id", controller.getA_F_R_MById)
  .post("/findcard", controller.get_AFRM_BYuserId)
  .post("/", validator.A_F_R_M_validator, controller.creatA_F_R_M)
  .put("/:id", validator.A_F_R_M_validator, controller.updatA_F_R_M)
  .delete("/:id", controller.deletA_F_R_M);

module.exports = router;
