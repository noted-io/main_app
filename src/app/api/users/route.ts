import { getCollection } from "@/lib/mongodb/datadb";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const usersCollection = await getCollection("users");

  const users = await usersCollection.find({}).toArray();

  res.json({status: 200, data: users});
}