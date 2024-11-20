import mongoose from "mongoose";

declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  console.log("MongoDB connecting...");
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(
      (mongoose) => {
        console.log("MongoDB connected successfully");
        return mongoose;
      },
      (error) => {
        console.error("MongoDB connection failed", error);
        throw error;
      }
    );
  }
  cached.conn = (await cached.promise).connection;
  return cached.conn;
}

export default connectDB;