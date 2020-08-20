import { IServices } from "./services";

export interface IInvoice {
    user: Object,
    selectedServices: [
        {
            serviceId: Object
            selection?: Number
            // price: Number
        }
    ]

}