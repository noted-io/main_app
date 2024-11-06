import exp from "constants";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ status: 200, data: "Hello, World!" });
}

export async function POST(req: Request) {
    const body = await req.json();
    return NextResponse.json({ status: 200, data: body });
}

export async function PUT() {
    return NextResponse.json({ status: 200, data: "Hello, World!" });
}

export async function DELETE() {
    return NextResponse.json({ status: 200, data: "Hello, World!" });
}

export async function PATCH() {
    return NextResponse.json({ status: 200, data: "Hello, World!" });
}