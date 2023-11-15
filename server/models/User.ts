import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  mobileNumber: {
    type: String,
    required: [true, "Phone number is required"],
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
