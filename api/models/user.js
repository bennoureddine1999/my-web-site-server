const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchma = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  //   dateofbirth: {
  //     type: String,
  //   },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", userSchma);

module.exports = User;
