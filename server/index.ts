import express from "express";
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.ts";
import connection from "./utils/db";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status ? error.status : 500;
  const message = error.message ? error.message : "Something went wrong";
  res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(3000, () => {
  connection();
  console.log("Server running on port 3000");
});
