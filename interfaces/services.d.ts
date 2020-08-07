export interface IServices {
    service: string,
    explanation: string,
    pricing: PricingType,
}

export interface PricingType {
    type: 'Options' | 'Incremental' | 'Flat' | 'Included',
}

export interface IOptionsPricing extends PricingType {
    type: 'Options',
    options:  IServicePricingOption[],
}

export interface IServicePricingOption {
    description: string;
    price: string;
}

export interface IIncrementalPricing {
    type: 'Incremental'
    min: number,
    max: number,
    increment: number,
    unitPrice: number,
}

export interface IFlatPricing {
    type: 'Flat'
    price: number;
}

// export interface Pricing {
//     type: string,
//     options?: IServicePricingOption[],
//     min?: number;
//     max?: number;
//     increment?: number;
//     unitPrice?: number;
//     price?: number;
// }