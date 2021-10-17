const Hotels = require("../../models/hotels");
const fileUpload = require("express-fileupload");
const path = require("path");

const getHotel = async (req, res) => {
  const hotel = await Hotels.find({});
  res.status(200).send({
    message: "Fetched successfully",
    data: hotel,
  });
};

const getHotelById = async (req, res) => {
  const id = req.params.id;
  const hotel = await Hotels.findOne({ _id: id });
  if (!hotel) {
    return res.status(404).send({
      message: "hotel not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched successfully",
    data: hotel,
  });
};

const creatHotel = async (req, res) => {
  const photo = req.files.photo;
  const uploadPath = __dirname + "C:UsersTRETECDesktopimages" + photo.name;
  const hotel = new Hotels({
    ...req.body,
  });
  if (!req.body.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  photo.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.send("File uploaded!");
  });
  await hotel.save();
  res.status(200).send({
    message: "Hotel created seccessfully",
    data: hotel,
  });
};
const updatHotel = async (req, res) => {
  const id = req.params.id;
  const hotel = await Hotels.findone({ _id: id });
  if (!hotel) {
    return res.status(404).send({
      message: "hotel not found",
      data: {},
    });
  }
  const updathotel = await Hotels.updateOne({ _id: id }, { ...req.body });
  res.status(200).send({
    message: "hotel updated successfully",
    data: {},
  });
};

const deletHOtel = async (req, res) => {
  const id = req.params.id;
  const hotel = await Hotels.findOne({ _id: id });
  if (!hotel) {
    return res.status(404).send({
      message: "hotel not found",
      data: {},
    });
  }
  const delethotel = await Hotels.deleteOne({ _id: id });
  res.status(200).send({
    message: "hotel deleted",
    data: {},
  });
};

module.exports = {
  getHotel,
  getHotelById,
  creatHotel,
  updatHotel,
  deletHOtel,
};
