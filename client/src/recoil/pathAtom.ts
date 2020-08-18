import { atom } from 'recoil';

export const pathAtom = atom<string | undefined>({
    key: "pathAtom",
    default: '',
});