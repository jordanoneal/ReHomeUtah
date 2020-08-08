export interface IsellerDetails {
   livedAtProperty: {
       years: number
       months: number
   },
   sellBy: date //If date sent back isn't working set to a string.
   homeListed: date//^^
   reasonSelling: string
   concernsSelling: string
   neededWork: boolean
   explainWork?: string
   currentLiving: number
   pets: boolean
   explainPets?: string
   homeFeatures: string

}