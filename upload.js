const Path = require("path");

const getPath = (name) => {
  return Path.join(__dirname, "uploads", name);
};

module.exports = {
  getPath,
};
