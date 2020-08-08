import mongoose, { Schema, Document, Model, SchemaTypes } from "mongoose";
import { ILogin } from "../interfaces/user";
import * as bcrypt from "bcrypt";
import { IUserModel } from "./user";

export interface ILoginModel extends ILogin, Document {
    // foreign key
    user: IUserModel["_id"]
  }

// schema 
export const LoginSchema = new Schema<ILoginModel>({
    provider: {
        type: String,
        required: true

    },
    providerUserId: {
        type: String
    },
    password: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
})

// model
export const Login = mongoose.model<ILoginModel>(
    "Login",
    LoginSchema

)

// bcrypt
export async function createLogin(newLogin: ILoginModel) {
    const hash = await bcrypt.hash(newLogin.password, 10);
    newLogin.password = hash;
    return await newLogin.save();
  }
  export async function checkPassword(login: ILoginModel, password: string) {
    return await bcrypt.compare(login.password, password);
  }