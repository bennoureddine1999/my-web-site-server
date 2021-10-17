const Joi = require("joi");

const validatelogin = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  const result1 = schema.validate(req.body);
  if (result1.error) {
    return res.status(400).send({
      message: result1.error,
    });
  }
  next();
};

module.exports = {
  validatelogin,
};
