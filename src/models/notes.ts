import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the schema
export interface INote extends Document {
    id: number;
    title: string;
    university: string;
    className: string;
    year: string;
    author: string;
    authorAvatar: string;
    type: string;
    pages: number;
    downloads: number;
    likes: number;
    rating: number;
    imageUrl: string;
    createdAt?: Date;         // Automatically added by MongoDB
    updatedAt?: Date;         // Automatically added by MongoDB
}

// Define the Mongoose schema
const noteSchema: Schema<INote> = new mongoose.Schema(
    {
        id: {
            type: Number, // Should be a single number, not an array
            required: true,
        },
        title: {
            type: String, // Should be a single string, not an array
            required: true,
        },
        university: {
            type: String, // Should be a single string, not an array
            required: true,
        },
        className: {
            type: String, // Should be a single string, not an array
            required: true,
        },
        year: {
            type: String, // Should be a single string, not an array
            required: true,
        },
        author: {
            type: String, // Should be a single string, not an array
            required: true,
        },
        authorAvatar: {
            type: String, // Should be a single string, not an array
            required: true,
        },
        type: {
            type: String, // Should be a single string, not an array
            required: true,
        },
        pages: {
            type: Number, // Should be a single number, not an array
            required: true,
        },
        downloads: {
            type: Number, // Should be a single number, not an array
            required: true,
        },
        likes: {
            type: Number, // Should be a single number, not an array
            required: true,
        },
        rating: {
            type: Number, // Should be a single number, not an array
            required: true,
        },
        imageUrl: {
            type: String, // Should be a single string, not an array
            required: true,
        },
    }, 
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

// Define and export the model
const Note: Model<INote> = mongoose.models.Note || mongoose.model<INote>("Note", noteSchema);
export default Note;
