import mongoose, { Schema, Document, Model } from "mongoose";
import { IInvoice } from "../interfaces/invoice";
import { IServicesModel } from "./services";
import { IUserModel } from "./user";

export interface IInvoiceModel extends IInvoice, Document {
    // foreign key
    "Services": IServicesModel["_id"],
    user: IUserModel["_id"]
}

export const InvoiceSchema  = new Schema<IInvoiceModel>({
    user: {
        type: Schema.Types.ObjectId,
                required: true,
                ref: "User"
    },
    selectedServices: [
        {
            serviceId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: "Services"
            },
            selection: {
                type: Number,
                required: false
            }
        }
    ]
    // price: {
    //     type: Number,
    //     required: true
    // }
});

export const Invoice = mongoose.model<IInvoiceModel>(
    "Invoice",
    InvoiceSchema
  );