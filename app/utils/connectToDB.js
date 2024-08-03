import { MongoClient } from "mongodb";

export default async function connectToDB() {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    return client;
  } catch (error) {
    console.log(error);
  }
}
