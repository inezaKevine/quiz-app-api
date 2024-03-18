import AuthService from "../services/auth.service";

export class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async register(req, res, next) {
    try {
      await this.authService.register(req.body);
      res.status(201).json({
        statusCode: 201,
        message: "Registration successful",
        payload: null,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const token = await this.authService.login(email, password);
      res.status(200).json({
        statusCode: 200,
        message: "Login successful",
        token: token,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
