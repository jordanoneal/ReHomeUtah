export interface IUser {
  // modeled from Account info page
  firstName?: string;
  lastName?: string;
  email: string;
  address?: string;
  city?: string;
  zipCode?: number;
  phoneNumber?: string;
  referrer?: string;
  // admin: boolean;
}

export interface ILogin {
  // retrieved from google oauth except for password (password for local authentication?)
  provider: string;
  providerUserId?: string;
  password?: string;
}
