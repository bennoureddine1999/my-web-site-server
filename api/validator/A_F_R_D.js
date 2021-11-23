const Joi = require("joi");

const A_F_R_D_validator = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),

    province: Joi.string().required(),
    city: Joi.string().required(),
    liste: Joi.string().required(),
    prix: Joi.number().required(),
    rooms: Joi.number().required(),
    furthest: Joi.number().required(),
    interfaces: Joi.number().required(),
    content: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
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
  A_F_R_D_validator,
};
