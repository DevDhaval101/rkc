import { MongoClient } from "mongodb";

let client;

async function connectToDB() {
  if (client) {
    return client;
  }

  client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    return client;
  } catch (error) {
    console.log(error);
  }
}

export default connectToDB;
