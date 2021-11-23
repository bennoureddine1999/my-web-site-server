const A_F_R_M = require("../../models/A_F_R_M");
const fileUpload = require("express-fileupload");
const utils = require("../../../upload");
const Path = require("path");

const getA_F_R_M = async (req, res) => {
  const a_f_r_m = await A_F_R_M.find({});
  res.status(200).send({
    message: "fetched seccessfully",
    data: a_f_r_m,
  });
};

const getA_F_R_MById = async (req, res) => {
  const id = req.params.id;
  const a_f_r_m = await A_F_R_M.findOne({ _id: id });
  if (!a_f_r_m) {
    return res.status(404).send({
      message: "a_f_r_m not fonde",
      data: {},
    });
  }
  res.status(200).send({
    message: "fetched seccessfully",
    data: a_f_r_m,
  });
};

const get_AFRM_BYuserId = async (req, res) => {
  const userloginID = req.body.userloginID;
  const afrm = await A_F_R_M.find({ userloginID: userloginID });
  if (!afrm) {
    return res.status(404).send({
      message: "CARD not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched seccessfully",
    data: afrm,
  });
};

const creatA_F_R_M = async (req, res) => {
  console.log("files", req.files);

  console.log("userID", req.body.userloginID);

  const userloginID = req.body.userloginID;
  const photo = req.files && req.files.photo;
  const path = utils.getPath(photo.name);
  console.log(path);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  photo.mv(path, async function (err) {
    if (err) return res.status(500).send(err);
    const a_f_r_m = new A_F_R_M({
      ...req.body,
      photo: path,
      userloginID: userloginID,
    });
    await a_f_r_m.save();
    res.status(200).send({
      message: "a_f_r_m created seccessfully",
      data: { a_f_r_m },
    });
  });
};

const updatA_F_R_M = async (req, res) => {
  const id = req.params.id;
  const a_f_r_m = await A_F_R_M.findone({ _id: id });
  if (!a_f_r_m) {
    return res.status(404).send({
      message: "a_f_r_m not fonde",
      data: {},
    });
  }
  const updata_f_r_m = await A_F_R_M.updateOne({ _id: id }, { ...req.body });
  res.status(200).send({
    message: "update seccessfully",
    data: {},
  });
};

const deletA_F_R_M = async (req, res) => {
  const id = req.params.id;
  const a_f_r_m = await A_F_R_M.findOne({ _id: id });
  if (!a_f_r_m) {
    return res.status(404).send({
      message: "a_f_r_m not fonde",
      data: {},
    });
  }
  const deleta_f_r_m = await A_F_R_M.deleteOne({ _id: id });
  res.status(200).send({
    message: "A_F_R_M deleted successfully",
    data: {},
  });
};
module.exports = {
  getA_F_R_M,
  getA_F_R_MById,
  creatA_F_R_M,
  updatA_F_R_M,
  deletA_F_R_M,
  get_AFRM_BYuserId,
};
