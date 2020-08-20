import mongoose, { Schema, Document, Model } from "mongoose";
import { IInvoice } from "../interfaces/invoice";
import { IServicesModel } from "./services";

export interface IInvoiceModel extends IInvoice, Document {
    // foreign key
    serviceId: IServicesModel["_id"]
}

export const InvoiceSchema  = new Schema<IInvoiceModel>({
    serviceId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "ServiceId"
    },
    selection: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})