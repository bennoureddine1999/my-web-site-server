const A_F_R_D = require("../../models/A_F_R_D");
const utils = require("../../../upload");
const path = require("path");
const fileUpload = require("express-fileupload");

const getA_F_R_D = async (req, res) => {
  const a_f_r_d = await A_F_R_D.find({});
  res.status(200).send({
    message: "fetched seccessfully",
    data: a_f_r_d,
  });
};

const getgetA_F_R_DById = async (req, res) => {
  const id = req.params.id;
  const a_f_r_d = await A_F_R_D.findOne({ _id: id });
  if (!a_f_r_d) {
    return res.status(404).send({
      message: "a_f_r_d not fonde",
      data: {},
    });
  }
  res.status(200).send({
    message: "fetched seccessfully",
    data: a_f_r_d,
  });
};

const get_AFRD_BYuserId = async (req, res) => {
  const userloginID = req.body.userloginID;
  const afrd = await A_F_R_D.find({ userloginID: userloginID });
  if (!afrd) {
    return res.status(404).send({
      message: "CARD not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched seccessfully",
    data: afrd,
  });
};
const creatA_F_R_D = async (req, res) => {
  console.log("files", req.files);

  const userloginID = req.body.userloginID;
  console.log("userID", req.body.userloginID);

  console.log("files", req.files);
  const photo = req.files && req.files.photo;
  const path = utils.getPath(photo.name);
  console.log(path);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  photo.mv(path, async function (err) {
    if (err) return res.status(500).send(err);
    const a_f_r_d = new A_F_R_D({
      ...req.body,
      photo: path,
      userloginID: userloginID,
    });
    await a_f_r_d.save();
    res.status(200).send({
      message: "a_f_r_m created seccessfully",
      data: { a_f_r_d },
    });
  });
};
const updatA_F_R_D = async (req, res) => {
  const id = req.params.id;
  const a_f_r_d = await A_F_R_D.findone({ _id: id });
  if (!a_f_r_d) {
    return res.status(404).send({
      message: "a_f_r_d not fonde",
      data: {},
    });
  }
  const updata_f_r_d = await A_F_R_D.updateOne({ _id: id }, { ...req.body });
  res.status(200).send({
    message: "update seccessfully",
    data: {},
  });
};

const deletA_F_R_D = async (req, res) => {
  const id = req.params.id;
  const a_f_r_d = await A_F_R_D.findOne({ _id: id });
  if (!a_f_r_d) {
    return res.status(404).send({
      message: "a_f_r_d not fonde",
      data: {},
    });
  }
  const deleta_f_r_d = await A_F_R_D.deleteOne({ _id: id });
  res.status(200).send({
    message: "A_F_R_D deleted successfully",
    data: {},
  });
};
module.exports = {
  getA_F_R_D,
  getgetA_F_R_DById,
  creatA_F_R_D,
  updatA_F_R_D,
  deletA_F_R_D,
  get_AFRD_BYuserId,
};
