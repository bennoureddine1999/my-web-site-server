const controller = require("./controller");
const express = require("express");
const router = express.Router();
const validator = require("../../validator/hotelsvalidator");

router
  .get("/", controller.getHotel)
  .get("/:id", controller.getHotelById)
  .post("/", validator.hotelValidate, controller.creatHotel)
  .put("/:id", validator.hotelValidate, controller.updatHotel)
  .delete("/:id", controller.deletHOtel);

module.exports = router;
