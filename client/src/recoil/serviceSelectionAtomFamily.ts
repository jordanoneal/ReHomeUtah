import { atomFamily } from "recoil";
import { ISelectedService } from "../../../interfaces/invoice";
import localforage from "localforage";

export interface ServiceSelection extends ISelectedService {
    selected: boolean;
}

export function getServiceSelectionStorageKey(serviceId: string) {
  return `serviceSelection-${serviceId}`
}

export const ServiceSelectionAtomFamily = atomFamily<ServiceSelection, string>({
  key: "serviceSelection",
  default: async (serviceId) => {
    return (
      (await localforage.getItem<ServiceSelection>(getServiceSelectionStorageKey(serviceId))) ||
      {
          selected: false,
          serviceId
      }
    );
  },
});
