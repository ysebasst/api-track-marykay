import { Schema, model } from "mongoose";

const CustomerSchema = new Schema(
  {
    user_id: String,
    name: String,
    date_of_birth: String,
    gender: String,
    email: String,
    phone_number: String,
    contact_time: String,
    city: String,
    address: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Customer", CustomerSchema);
