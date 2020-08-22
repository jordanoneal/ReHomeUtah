import mongoose, { Schema, Document } from "mongoose";
import { IServices } from "../interfaces/services";

export interface IServicesModel extends IServices, Document {}

// export interface IServicesModel
export const ServicesSchema = new Schema<IServicesModel>({
    serviceName: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    },
    pricing: {
        Options: [{
            description: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            }
        }],
        Incremental: {
            min: Number,
            max: Number,
            increment: Number,
            unitPrice: Number,
        },
        Flat: {
            price: Number,
        },
        Included: {
            description: String,
            price: String,
        },
    }
});

export const Services = mongoose.model<IServicesModel>(
  "Services",
  ServicesSchema
);
