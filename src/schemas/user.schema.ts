import { z } from "zod";

export const userSchema = z.object({
    name: z.string()
        .min(3, "Minimum 3 character is required!")
        .max(50, "too long for name!"),

    email: z.email("Invalide Imail format!"),

    age: z.number()
        .min(18)
        .max(60),

    isActive: z.boolean(),

    role: z.enum(["admin", "user", "researcher"]),

    hobbies: z.array(z.string()),

    address: z.object({
        city: z.string(),
        country: z.string()
    }),

    bio: z.string().optional(),

    phone: z.string().regex(/^[0-9]{10}$/, "Invalid phone"),

    password: z.string().min(6),

    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"]
});
