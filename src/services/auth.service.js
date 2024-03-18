import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../exceptions/http-exceptions";
import userModel from "../models/user.model";
import EncryptionUtil from "../utils/helpers/encryption.util";
import TokenUtil from "../utils/helpers/token.util";

export class AuthService {
  constructor() {
    this.userModel = userModel;
    this.tokenUtils = new TokenUtil();
    this.encryptionUtil = new EncryptionUtil();
  }

  async register(data) {
    const { username, email, password } = data;
    try {
      const existingUser = await this.userModel.findOne({ email: email });
      if (existingUser) {
        throw new ConflictException("User with this email already exists");
      }
      const hashedPassword = await this.encryptionUtil.hashPlainText(password);

      const newUser = new this.userModel({
        username: username,
        email: email,
        password: hashedPassword,
      });
      await newUser.save();
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      const user = await this.userModel.findOne({ email: email });
      if (!user) {
        throw new NotFoundException("User not found");
      }

      const isAuthenticated = await this.authenticateUser(user, password);
      if (isAuthenticated) {
        return this.tokenUtils.generateToken(user);
      } else {
        throw new UnauthorizedException("Invalid email or password");
      }
    } catch (error) {
      throw error;
    }
  }

  async authenticateUser(user, password) {
    const isMatch = await this.encryptionUtil.comparePlainAndHashText(
      password,
      user.password
    );
    return isMatch;
  }
}

export default AuthService;
