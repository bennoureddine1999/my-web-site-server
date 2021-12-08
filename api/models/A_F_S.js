const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const A_F_S_schema = new Schema({
  title: {
    type: String,
  },
  photo: [],
  city: {
    type: String,
  },
  province: {
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
  userloginID: {
    type: String,
  },
});

const A_F_S = mongoose.model("A_F_S", A_F_S_schema);
module.exports = A_F_S;
