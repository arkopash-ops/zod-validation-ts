import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User, { UserDocument } from "../models/user.model";
import { userSchema } from "../schemas/user.schema";
import { IUser } from "../types/user.types";

export const createUser = async (req: Request, res: Response) => {
    try {
        const parsed = userSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                success: false,
                errors: parsed.error.format(),
            });
        }

        const { confirmPassword, ...validatedData } = parsed.data;

        const hashedPassword = await bcrypt.hash(validatedData.password, 10);

        const user = await User.create({
            ...validatedData,
            password: hashedPassword,
        } as Partial<IUser>);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: user,
        });
    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: UserDocument[] = await User.find().select("-password");

        res.status(200).json({
            success: true,
            count: users.length,
            users,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
