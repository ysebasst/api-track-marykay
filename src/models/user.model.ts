import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    lastname: String,
    email: String,
    password: String,
    age: Number,
    phone_number: String,
    city: String,
    address: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("User", UserSchema);
