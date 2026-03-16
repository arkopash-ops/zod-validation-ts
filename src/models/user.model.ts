import mongoose, { Document, Schema } from "mongoose";
import { IUser, UserRole } from "../types/user.types";

export interface UserDocument extends IUser, Document { }

const addressSchema = new Schema({
    city: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    }
}, { _id: false });

const userSchema = new Schema<UserDocument>({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        required: true,
        min: 18,
        max: 60
    },

    isActive: {
        type: Boolean,
        default: true
    },

    role: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.USER
    },

    hobbies: {
        type: [String],
        default: []
    },

    address: {
        type: addressSchema,
        required: true
    },

    bio: { type: String },

    phone: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },
}, { timestamps: true });

const User = mongoose.model<UserDocument>("User", userSchema);
export default User;
