import errorHandler from "../middlewares/errorHandler";
import UserSchema from "../models/User";
import { NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";
import { SendEmail } from "../emails/sendEmail";
import jwt from "jsonwebtoken";
import GenerateToken from "../services/GenerateToken";
import verifyEmail from "../views/verifyEmailTemplate";
export class Register {
  public async register(req: Request, res: Response, next: NextFunction) {
    const { name, email, password, mobileNumber, country, dob } = req.body;

    try {
      const hashedPassword = AuthService.hashPassword(password);
      let user = await UserSchema.findOne({ email }, { maxTimeMS: 30000 });
      if (user) return next(errorHandler(401, "Email already used"));
      user = new UserSchema({
        ...req.body,
        password: hashedPassword,
      });
      await user.save();

      interface jwtOptions {
        user_id: unknown;
        email: string;
      }

      const token = new GenerateToken(
        process.env.JWT_CONFIRM_ACCOUNT_KEY,
        "1h"
      );

      const actualToken = token.token();

      const url: string = `http://localhost:8000/api/auth/verifyemail/user/${user._id}/verify/${actualToken}`;
      const html = verifyEmail(user.name, url);
      const sendMail = new SendEmail(user.email, "Account confirmation", html);
      const emailResponse = await sendMail
        .sendMail()
        .then((data) => {})
        .catch((error) => {
          return next(errorHandler(400, error.message));
        });
      res
        .status(200)
        .json(
          "Please click on the link in the email sent to you to confirm your account"
        );
    } catch (error) {
      return next(errorHandler);
    }
  }
}

export class ConfirmAccount {}

export class Login {
  public async login(req: Request, res: Response, next: NextFunction) {}
}
