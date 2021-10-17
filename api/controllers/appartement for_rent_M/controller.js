const A_F_R_M = require("../../models/A_F_R_M");

const getA_F_R_M = async (req, res) => {
  const a_f_r_m = await A_F_R_M.find({});
  res.status(200).send({
    message: "fetched seccessfully",
    data: a_f_r_m,
  });
};

const getgetA_F_R_MById = async (req, res) => {
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

const creatA_F_R_M = async (req, res) => {
  const a_f_r_m = new A_F_R_M({
    ...req.body,
  });
  await a_f_r_m.save();
  res.status(200).send({
    message: "a_f_r_m created seccessfully",
    data: { a_f_r_m },
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
  getgetA_F_R_MById,
  creatA_F_R_M,
  updatA_F_R_M,
  deletA_F_R_M,
};
