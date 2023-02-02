import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true },
  accountBal: { type: Number, default: 0 },
  deposits: { type: [Number], default: [] },
  earnings: { type: [Number], default: [] },
  referral: { type: Number, default: 0 },
  email: { type: String, unique: true },
  password: String,
  token: String,
});

const User = model("user", userSchema);

export default User;
