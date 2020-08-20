export interface ISellerDetails {
  livedAtProperty: {
    years: number;
    months: number;
  };
  sellBy: date; // If date sent back isn't working set to a string.
  homeListed: date; // ^^
  reasonSelling: string;
  concernsSelling: string;
  neededWork: string; // changed from boolean to string
  explainWork?: string;
  currentLiving: number;
  pets: boolean;
  explainPets?: string;
  homeFeatures: string;
}
