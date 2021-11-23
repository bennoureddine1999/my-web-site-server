const Joi = require("joi");
const path = require("path");

const hotelValidate = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    liste: Joi.string().required(),

    prix: Joi.number().required(),
    content: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    city: Joi.string().required(),
    province: Joi.string().required(),
    userloginID: Joi.required(),
    photo: Joi.required(),
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
  hotelValidate,
};
