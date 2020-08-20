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
  price: string
  // Price may have to revert back to string
}

export interface IIncrementalPricing {
  min: number
  max: number
  increment: number
  unitPrice: number
}

export interface IFlatPricing {
  price: number
}

export interface IIncludedPricing {
  description: string
  price: string
}

