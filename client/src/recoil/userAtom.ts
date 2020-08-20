import { atom, selector } from "recoil";

export class User {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  address?: string;
  city?: string;
  zipCode?: string;
  phoneNumber?: string;
  referrer?: string;
  constructor(user?: User) {
    this._id = user?._id || "";
    this.firstName = user?.firstName || "";
    this.lastName = user?.lastName || "";
    this.email = user?.email || "";
    this.address = user?.address || "";
    this.city = user?.city || "";
    this.zipCode = user?.zipCode || "";
    this.phoneNumber = user?.phoneNumber || "";
    this.referrer = user?.referrer || "";
  }
}

export const userState = atom<User | undefined | false>({
  key: "userState",
  default: undefined,
});

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => get(userState),
});
