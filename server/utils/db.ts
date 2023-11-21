import mongoose from "mongoose";
import { Pool } from "pg";

const dbConnection = async () => {
  const mongoUri: string = process.env.MONGO_URI!;
  try {
    await mongoose.connect(mongoUri);
    console.log("DB connection successfull");
  } catch (error: unknown) {
    console.log(error);
  }
};

const pgConnection = async () => {};

export default dbConnection;
