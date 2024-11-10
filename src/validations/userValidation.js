import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().min(0).required(),
  email: Joi.string().required(),
  gender: Joi.string().valid("masculino", "feminino").required(),
}).min(1);

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3),
  age: Joi.number().min(0),
  email: Joi.string().email(),
  gender: Joi.string().valid("masculino", "feminino"),
}).min(1);
