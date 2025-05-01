import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      types: String,
      required: true,
      unique: true,
    },
    fullName: {
      types: String,
      required: true,
    },
    password: {
      types: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      types: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
