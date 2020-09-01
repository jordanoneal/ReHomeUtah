export interface IInvoice {
    user: string;
    selectedServices: ISelectedService[];
}

export interface ISelectedService {
    serviceId: string;
    selection?: number;
}