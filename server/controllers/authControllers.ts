import errorHandler from "../middlewares/errorHandler";
import UserSchema from "../models/User";
import { NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";

export class Register {
  public async register(req: Request, res: Response, next: NextFunction) {
    const { name, email, password, mobileNumber, country, dateOfBirth } =
      req.body;
    try {
      const hashedPassword = AuthService.hashPassword(password);
      let user = await UserSchema.findOne({ email }, { maxTimeMS: 30000 });
      if (user) return next(errorHandler(401, "Email already used"));
      user = new UserSchema({
        ...req.body,
        password: hashedPassword,
      });
      await user.save();
    } catch (error) {
      return next(errorHandler);
    }
  }
}

export class Login {}
