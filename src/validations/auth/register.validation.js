import { BadRequestException } from "../../exceptions/http-exceptions";
import Joi from "joi";

// Validation middleware using Joi
export const registerValidation = (req, res, next) => {
  const { username, email, password } = req.body;

  const { error } = validateSchema.validate({ username, email, password });

  if (error) {
    throw new BadRequestException(
      error.details
        .map((detail) => detail.message)
        .map((str) => str.replace(/\"/g, ""))
    );
  }
  next();
};

// Joi validation schema
const validateSchema = Joi.object({
  username: Joi.string().required().label("Username"),
  email: Joi.string().required().email().label("Email"),
  password: Joi.string().required().label("Password"),
}).options({ abortEarly: false });
