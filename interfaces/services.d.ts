export interface IServices {
  service: string;
  explanation: string;
  pricing: {
    [propName: PricingType]:
      | IOptionsPricing
      | IFlatPricing
      | IIncrementalPricing
      | IIncludedPricing;
  };
}

export type PricingType = "Options" | "Incremental" | "Flat" | "Included";

export interface IOptionsPricing {
  options: IServicePricingOption[];
}

export interface IServicePricingOption {
  description: string;
  price: string;
  // Price may have to revert back to string
}

export interface IIncrementalPricing {
  min: number;
  max: number;
  increment: number;
  unitPrice: number;
}

export interface IFlatPricing {
  price: number;
}

export interface IIncludedPricing {
  description: string;
  price: string;
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
