export interface IInvoice {
    user: string,
    selectedServices: [
        {
            serviceId: string
            selection?: number
        }
    ]
}