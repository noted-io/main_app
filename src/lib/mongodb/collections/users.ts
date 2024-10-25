import { MongoClient } from "mongodb";
import clientPromise from "../mongodb";

let db;
let users;

clientPromise.then(client => {
  db = client.db();
  users = db.collection('users');
}).catch(error => {
  throw new Error(`Error connecting to the database: ${error.message}`);
});


