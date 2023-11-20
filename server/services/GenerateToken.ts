import jwt from "jsonwebtoken";

class GenerateToken {
  expiresIn: string;
  jwtSec: string | undefined;

  constructor(jwtSec: string | undefined, expiresIn: string) {
    this.jwtSec = jwtSec;
    this.expiresIn = expiresIn;
  }

  public token() {
    const token = jwt.sign(
      {
        user_id: "1234567890",
        email: "<EMAIL>",
      },
      this.jwtSec || "",
      {
        expiresIn: this.expiresIn,
      }
    );
    return token;
  }
}

export default GenerateToken;
