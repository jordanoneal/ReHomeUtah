import {useCallback, useMemo} from 'react';
import { useRecoilState, SetterOrUpdater } from "recoil";
import { ServiceSelectionAtomFamily, ServiceSelection, getServiceSelectionStorageKey } from "../recoil/serviceSelectionAtomFamily";
import localforage from "localforage";

export const useServiceSelection = (serviceId: string) => {
    const [serviceSelection, internalSetter] = useRecoilState(ServiceSelectionAtomFamily(serviceId));  
    
    const setServiceSelection = useCallback(async (selection: ServiceSelection) => {
        internalSetter(selection);
        await localforage.setItem(getServiceSelectionStorageKey(serviceId), selection);
    }, [internalSetter, serviceId]);

    return useMemo(() => [serviceSelection, setServiceSelection] as [ServiceSelection, SetterOrUpdater<ServiceSelection>] , [serviceSelection, setServiceSelection]);
}