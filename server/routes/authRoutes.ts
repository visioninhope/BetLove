import { Request, Response, NextFunction, Router } from "express";
import { Register } from "../controllers/authControllers";
const router = Router();
const register = new Register();

router.post("/register", register.register);

export default router;
