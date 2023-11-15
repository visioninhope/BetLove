import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface User {
  email: string;
  id: string;
}

class AuthService {
  static hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  static comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }

  static generateToken(user: User): string {
    const token = jwt.sign(user, process.env.JWT_SECRET as string, {
      expiresIn: 86400,
    });
    return token;
  }
}

export default AuthService;
