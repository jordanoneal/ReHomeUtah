import mongoose, { Schema, Document, Model } from "mongoose";
import { IsellerDetails } from "../interfaces/sellerDetails";

export interface IsellerDetailsModel extends IsellerDetails, Document {}


export const SellerDetailsSchema = new Schema<IsellerDetailsModel> ({
    livedAtProperty: {
        years: {
            type: Number
        },
        months: {
            type: Number
        }
    },
    sellBy: {
        type: Date
    },
    homeListed: {
        type: Date
    },
    reasonSelling: {
        type: String
    },
    concernsSelling: {
        type: String
    },
    neededWork: {
        type: Boolean
    },
    explainWork: {
        type: String
    },
    currentLiving: {
        type: Number
    },
    pets: {
        type: Boolean
    },
    explainPets: {
        type: String
    },
    homeFeatures: {
        type: String
    }
})

export const SellerDetails: Model<IsellerDetailsModel> = mongoose.model<IsellerDetailsModel>(
    "SellerDetails",
    SellerDetailsSchema
)