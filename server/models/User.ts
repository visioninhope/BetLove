import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("user", UserSchema);
