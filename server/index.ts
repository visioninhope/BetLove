import express from "express";
import dotenv from "dotenv";
import connection from "./utils/db";
const app = express();
dotenv.config();

app.listen(8000, () => {
  connection();
  console.log("Server running on port 8000");
});
