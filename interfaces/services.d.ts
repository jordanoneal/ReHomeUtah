export interface IServices {
  serviceName: string
  explanation: string
  pricing: {
    Included?: IIncludedPricing
    Options?: IOptionsPricing
    Incremental?: IIncrementalPricing
    Flat?: IFlatPricing
  }
}

export type PricingType = "Options" | "Incremental" | "Flat" | "Included";

export type IOptionsPricing = IServicePricingOption[];

export interface IServicePricingOption {
  description: string
  price: number
  // Price may have to revert back to string
}

export interface IIncrementalPricing {
  min: number
  max: number
  increment: number
  unitPrice?: number
  unitName?: string
}

export interface IFlatPricing {
  price: number
}

export type IIncludedPricing = boolean

