export interface IUser {
    firstName?: string
    lastName?: string
    email: string,
    address?: string,
    city?: string,
    zipCode?: number,
    phoneNumber?: string
    referrer?: string
}

export interface ILogin {
    provider: string,
    providerUserId?: string,
    password?: string
}