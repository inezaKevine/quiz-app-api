import { BadRequestException } from "../../exceptions/http-exceptions";
import Joi from "joi";

// Validation middleware using Joi
export const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  const { error } = validateSchema.validate({ email, password });

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
  email: Joi.string().required().label("Email").email(),
  password: Joi.string().required().label("Password"),
}).options({ abortEarly: false });
