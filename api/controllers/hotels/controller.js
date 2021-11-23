const Hotels = require("../../models/hotels");
const fileUpload = require("express-fileupload");
const utils = require("../../../upload");
const Path = require("path");
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

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
const getHotelBYuserId = async (req, res) => {
  const userloginID = req.body.userloginID;
  const hotel = await Hotels.find({ userloginID: userloginID });
  if (!hotel) {
    return res.status(404).send({
      message: "hotel not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched seccessfully",
    data: hotel,
  });
};

const creatHotel = async (req, res) => {
  // console.log("files", ...req.body);

  console.log("userID", req.body.userloginID);
  const photo = req.body.photo;
  // console.log("photo", photo);
  const userloginID = req.body.userloginID;
  // const photo = req.files && req.files.photo;
  // const path = utils.getPath(photo.name);
  // console.log(path);
  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return res.status(400).send("No files were uploaded.");
  // }
  // photo.mv(path, async function (err) {
  // if (err) return res.status(500).send(err);
  const hotel = new Hotels({
    ...req.body,
    // photo: path,
    photo: photo,
    userloginID: userloginID,
  });
  await hotel.save();
  res.status(200).send({
    message: "Hotel created seccessfully",
    data: hotel,
  });
};
const search = async (req, res) => {
  const province = req.body.Province;
  const hotel = await Hotels.find({ province: province });
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
  search,
  getHotelBYuserId,
};
