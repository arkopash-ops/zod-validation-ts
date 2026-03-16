import { z } from "zod";
import { userSchema } from "../schemas/user.schema";

export type UserInput = z.infer<typeof userSchema>;

export enum UserRole {
    ADMIN = "admin",
    USER = "user",
    RESEARCHER = "researcher",
}

export interface Address {
    city: string;
    country: string;
}

export interface IUser {
    name: string;
    email: string;
    age: number;
    isActive: boolean;
    role: UserRole;
    hobbies: string[];
    address: Address;
    bio?: string;
    phone: string;
    password: string;
    createdAt?: Date;
}
