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
            min: {
                type: Number,
                required: true
            },
            max: {
                type: Number,
                required: true
            },
            increment: {
                type: Number,
                required: true
            },
            unitPrice: Number,
            unitName: String
        },
        Flat: {
            price: {
                type: Number,
                requeired: true
            }
        },
        Included: Boolean,
    }
});

export const Services = mongoose.model<IServicesModel>(
  "Services",
  ServicesSchema
);
