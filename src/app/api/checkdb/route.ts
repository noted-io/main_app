import clientPromise from "../../../lib/mongodb/mongodb";
import { NextResponse } from "next/server";


// write me a GET endpoint that checks the MongoDB connection
// and returns a 200 status if the connection is successful
// and a 500 status if the connection is not successful
// and returns in the db called "data" can you list all of the collections

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("data");
        const collections = await db.listCollections().toArray();
        return NextResponse.json({ status: 200, data: collections });
    } catch (error) {
        return NextResponse.json({ status: 500, data: error });
    }
}