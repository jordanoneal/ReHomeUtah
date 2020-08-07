import mongoose, { Schema, Document, Model } from "mongoose";
import { IServices } from "../interfaces/services";

// export interface IServicesModel
new Schema({
    service: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    },
    pricing: {
        type: {
            type: {
                type: String,
                required: true
            },
            options: [{
                description: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                }
            }],
            min: Number,
            max: Number,
            increment: Number,
            unitPrice: Number,
            price: Number
        }
    }
})
