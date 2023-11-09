const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection successfull");
  } catch (error: unknown) {
    console.log(error);
  }
};

export default dbConnection;
