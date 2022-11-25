export type user = {
    id: string
    email: string
    password: string
    name: string,
    role: USER_ROLES
}

export enum USER_ROLES {
    admin = "admin",
    user = "user"
}