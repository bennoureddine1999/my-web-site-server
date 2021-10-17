const Joi = require("joi");

const validatePost = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    //dateofbirth: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: result.error,
    });
  }
  next();
};
module.exports = {
  validatePost,
};
