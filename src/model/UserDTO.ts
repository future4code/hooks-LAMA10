import { USER_ROLES } from "./User";

export interface UserInputDTO {
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
 }

 export interface LoginInputDTO {
    email: string,
    password: string
 }