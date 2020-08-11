import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {}

// schema
export const UserSchema = new Schema<IUserModel>({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    index: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  phoneNumber: {
    type: String,
  },
  referrer: {
    type: String,
  },
});

// User model
export const User = mongoose.model<IUserModel>("User", UserSchema);
