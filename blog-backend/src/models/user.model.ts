import mongoose, { Schema, Document, Model } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export interface IUser extends Document {
    username: string;
    email: string;
    fullName: string;
    avatar?: string;
    coverImage?: string;
    password: string;
    role: "user" | "admin";
    isActive: boolean;
    refreshToken?: string;

    // Custom instance methods
    isPasswordCorrect(password: string): Promise<boolean>;
    generateAccessToken(): string;
    generateRefreshToken(): string;
}

const userSchema: Schema<IUser> = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,
        },
        coverImage: {
            type: String,
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        refreshToken: {
            type: String
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
            // required: true
        },
        isActive: {
            type: Boolean,
            default: true,
            // index: true
        }

    },
    {
        timestamps: true
    }
);

// Pre-save hook
userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Instance methods
userSchema.methods.isPasswordCorrect = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function (): string {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error('ACCESS_TOKEN_SECRET is not defined');
    }

    return jwt.sign(
        {
            id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET.replace(/"/g, ''),
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIREY?.replace(/"/g, '')
        } as jwt.SignOptions
    );
};

userSchema.methods.generateRefreshToken = function (): string {
    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }

    return jwt.sign(
        {
            id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET.replace(/"/g, ''),
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIREY?.replace(/"/g, '')
        } as jwt.SignOptions
    );
};

// Create model with IUser interface
export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
