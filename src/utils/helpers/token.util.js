import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class TokenUtil {
  constructor() {}

  generateToken(user) {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }
}

export default TokenUtil;
