import { AuthController } from "../controllers/auth.controller";

import express from "express";
import { registerValidation } from "../validations/auth/register.validation";
import { loginValidation } from "../validations/auth/login.validation";

const router = express.Router();

const authController = new AuthController();

router.post(
  "/register",
  registerValidation,
  authController.register.bind(authController)
);
router.post(
  "/login",
  loginValidation,
  authController.login.bind(authController)
);

export default router;
