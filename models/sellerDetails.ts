import mongoose, { Schema, Document, Model } from "mongoose";
import { ISellerDetails } from "../interfaces/sellerDetails";
import { IUserModel } from "./user";

export interface ISellerDetailsModel extends ISellerDetails, Document {
  // foreign key
  user: IUserModel["_id"];
}

// schema
export const SellerSchema = new Schema<ISellerDetailsModel>({
  livedAtProperty: {
    years: {
      type: Number,
    },
    months: {
      type: Number,
    },
  },
  sellBy: {
    type: Date,
  },
  homeListed: {
    type: Date,
  },
  reasonSelling: {
    type: String,
  },
  concernsSelling: {
    type: String,
  },
  neededWork: {
    type: String, // changed from boolean to string
  },
  explainWork: {
    type: String,
  },
  currentLiving: {
    type: Number,
  },
  pets: {
    type: Boolean,
  },
  explainPets: {
    type: String,
  },
  homeFeatures: {
    type: String,
  },
});

export const Seller = mongoose.model<ISellerDetailsModel>(
  "Seller",
  SellerSchema
);
