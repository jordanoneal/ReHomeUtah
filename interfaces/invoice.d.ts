import { IServices } from "./services";

export interface IInvoice {
    selectedServices: [
        {
            serviceId: Object
            selection?: String
            price: Number
        }
    ]

}