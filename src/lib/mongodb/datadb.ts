import clientPromise from "./mongodb";

async function getdataDb() {
  const client = await clientPromise;
  return client.db('data');
}

async function getCollection(collection: string) {
    const db = await getdataDb();
    return db.collection(collection);
}

export { getdataDb, getCollection };