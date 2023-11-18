import errorHandler from "../middlewares/errorHandler";
import UserSchema from "../models/User";
import { NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";
import { SendEmail } from "../emails/sendEmail";
import jwt from "jsonwebtoken";

export class Register {
  req: Request;
  res: Response;
  next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }
  public async register() {
    const { name, email, password, mobileNumber, country, dateOfBirth } =
      this.req.body;
    try {
      const hashedPassword = AuthService.hashPassword(password);
      let user = await UserSchema.findOne({ email }, { maxTimeMS: 30000 });
      if (user) return this.next(errorHandler(401, "Email already used"));
      user = new UserSchema({
        ...this.req.body,
        password: hashedPassword,
      });
      await user.save();
      interface jwtOptions {
        user_id: unknown;
        email: string;
      }

      const confirmToken: jwtOptions = {
        user_id: user._id,
        email: user.email,
      };

      const JWT_ACCOUNT_CONFIRM_SEC: string | undefined =
        process.env.JWT_CONFIRM_ACCOUNT_KEY;

      const token = jwt.sign(confirmToken, JWT_ACCOUNT_CONFIRM_SEC || "", {
        expiresIn: "1h",
      });
      const url: string = `http://localhost:8000/api/auth/verifyemail/user/${user._id}/verify/${token}`;
      const sendMail = new SendEmail(user.email, "Account confirmation", url);
    } catch (error) {
      return this.next(errorHandler);
    }
  }
}

export class Login {
  public async login(req: Request, res: Response, next: NextFunction) {}
}
