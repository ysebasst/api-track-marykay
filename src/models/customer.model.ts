import { Schema, model } from "mongoose";

const CustomerSchema = new Schema(
  {
    user_id: String,
    name: String,
    email: String,
    age: Number,
    phone_number: String,
    city: String,
    address: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Customer", CustomerSchema);
