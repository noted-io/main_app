import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the schema
export interface IUser extends Document {
    emailAddresses: string[]; // Array of email addresses
    firstName?: string;       // Optional
    lastName?: string;        // Optional
    imageUrl?: string;        // Optional
    clerkUserId: string;      // Required
    createdAt?: Date;         // Automatically added by MongoDB
    updatedAt?: Date;         // Automatically added by MongoDB
}

// Define the Mongoose schema
const userSchema: Schema<IUser> = new mongoose.Schema(
    {
        emailAddresses: {
            type: [String], // Array of strings
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
        clerkUserId: {
            type: String,
            required: true,
        },
    }, 
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

// Define and export the model
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;
