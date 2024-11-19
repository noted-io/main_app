import connectDB from "@/lib/mongodb/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(){
    await connectDB();

    try {
        const users = await User.find({});
        return NextResponse.json(users);
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "Error occurred"});
    }
}

export async function POST(req: Request){
    await connectDB();

    try {
        const user = await User.create(req.body);
        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "Error occurred"});
    }
}