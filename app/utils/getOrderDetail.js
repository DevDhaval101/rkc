import connectToDB from "@/app/utils/connectToDB";

import { ObjectId } from "mongodb";

export default async function getOrderDetail(orderId) {
  // console.log(orderId);
  const client = await connectToDB();

  const collection = client
    .db(process.env.DB_NAME)
    .collection(process.env.COLL_NAME);

  const order = await collection.findOne({ _id: new ObjectId(orderId) });

  return order;
}
