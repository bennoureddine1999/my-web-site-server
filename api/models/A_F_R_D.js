const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const A_F_R_D_schema = new Schema({
  title: {
    type: String,
  },
  photo: {
    type: String,
  },
  gps: {
    type: String,
  },
  liste: {
    type: String,
  },
  prix: {
    type: Number,
  },
  rooms: {
    type: Number,
  },
  furthest: {
    type: Number,
  },
  interfaces: {
    type: Number,
  },
  content: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
});

const A_F_R_D = mongoose.model("A_F_R_D", A_F_R_D_schema);
module.exports = A_F_R_D;