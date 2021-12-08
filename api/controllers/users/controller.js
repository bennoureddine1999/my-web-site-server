const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");
const { findOne } = require("../../models/user");
const fileUpload = require("express-fileupload");
const utils = require("../../../upload");
const Path = require("path");

const login = async (req, res) => {
  console.log("DATA reseved");
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email });
  console.log("connect");
  if (!user) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  console.log(user);
  console.log(password);
  console.log(password == user.password);
  if (user.password == password) {
    const token = await jwt.sign(email, process.env.private_key);
    return res.status(200).send({
      message: "login success",
      data: {
        token: token,
      },
    });
  } else {
    return res.status(401).send({
      message: "wrong password",
      data: {},
    });
  }
};

const getUser = async (req, res) => {
  const users = await User.find({});
  res.status(200).send({
    message: "Fetched successfully",
    data: users,
  });
};

const getUserById = async (req, res) => {
  const id = req.params.Id;
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched successfully",
    data: user,
  });
};
const getUserByEmail = async (req, res) => {
  const email = req.body.email;
  // console.log(req.body);
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched successfully",
    data: user,
  });
};
const createUser = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email: email });

  if (user) {
    return res.status(404).send({
      Message: "user alredy exist just login",
      data: {},
    });
  }
  const user1 = new User({
    ...req.body,
  });

  await user1.save();
  res.status(200).send({
    message: "User created successfully",
    data: user,
  });
};

const updatUser = async (req, res) => {
  const photo = req.body.photo;
  const dateofbirth = req.body.dateofbirth;
  const gender = req.body.gender;
  // console.log("photo", photo);
  // console.log("dateofBirth", dateofbirth);
  // console.log("gender", gender);
  // const path = utils.getPath(photo.URL.Ex);
  // console.log(path);
  const id = req.params.id;
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(404).send({
      message: "user not fond",
      data: {},
    });
  }
  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return res.status(400).send("No files were uploaded.");
  // }
  // photo.mv(path, async function (err) {
  const updateuser = await User.updateOne(
    { _id: id },
    { ...req.body, photo: photo, dateofbirth: dateofbirth, gender: gender }
  );
  res.status(200).send({
    message: "User updated successfully",
    data: {},
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(404).send({
      message: "user not fond",
      data: {},
    });
  }
  const deleteuser = await User.deleteOne({ _id: id });
  res.status(200).send({
    message: "User updated deleted",
    data: {},
  });
};

module.exports = {
  getUser,
  getUserById,
  getUserByEmail,
  createUser,
  updatUser,
  deleteUser,
  login,
};
