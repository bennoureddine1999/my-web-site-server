const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
  title: {
    type: String,
  },
  liste: {
    type: String,
  },
  photo: {},
  prix: {
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
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  userloginID: {
    type: String,
  },
});

const Hotels = mongoose.model("Hotels", HotelSchema);

module.exports = Hotels;
