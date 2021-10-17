const A_F_S = require("../../models/A_F_S");

const getA_F_S = async (req, res) => {
  const a_f_s = await A_F_S.find({});
  res.status(200).send({
    message: "fetched seccessfully",
    data: a_f_s,
  });
};

const getgetA_F_SById = async (req, res) => {
  const id = req.params.id;
  const a_f_s = await A_F_S.findOne({ _id: id });
  if (!a_f_s) {
    return res.status(404).send({
      message: "a_f_s not fonde",
      data: {},
    });
  }
  res.status(200).send({
    message: "fetched seccessfully",
    data: a_f_s,
  });
};

const creatA_F_S = async (req, res) => {
  const a_f_s = new A_F_S({
    ...req.body,
  });
  await a_f_s.save();
  res.status(200).send({
    message: "a_f_s created seccessfully",
    data: a_f_s,
  });
};

const updatA_F_S = async (req, res) => {
  const id = req.params.id;
  const a_f_s = await A_F_S.findone({ _id: id });
  if (!A_F_S) {
    return res.status(404).send({
      message: "a_f_s not fonde",
      data: {},
    });
  }
  const updata_f_s = await A_F_S.updateOne({ _id: id }, { ...req.body });
  res.status(200).send({
    message: "update seccessfully",
    data: {},
  });
};

const deletA_F_S = async (req, res) => {
  const id = req.params.id;
  const a_f_s = await A_F_S.findOne({ _id: id });
  if (!a_f_s) {
    return res.status(404).send({
      message: "a_f_s not fonde",
      data: {},
    });
  }
  const deleta_f_s = await A_F_S.deleteOne({ _id: id });
  res.status(200).send({
    message: "A_F_R_M deleted successfully",
    data: {},
  });
};
module.exports = {
  getA_F_S,
  getgetA_F_SById,
  creatA_F_S,
  updatA_F_S,
  deletA_F_S,
};
