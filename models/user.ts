import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser, ILogin } from "../interfaces/user";
import * as bcrypt from "bcrypt";

export interface IUserModel extends IUser, Document {}
export interface ILoginModel extends ILogin, Document {
    userId: Schema.Types.ObjectId;
}