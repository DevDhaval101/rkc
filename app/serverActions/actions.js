"use server";

import { redirect } from "next/navigation";

import connectToDB from "@/app/utils/connectToDB";
import { ObjectId } from "mongodb";

export async function submitAction(prevState, formData) {
  const data = Object.fromEntries(formData);
  let filteredData = {};

  for (let key in data) {
    if (!key.includes("$ACTION")) {
      filteredData[key] = data[key];
    }
  }

  let orderId;
  try {
    const client = await connectToDB();

    const collection = client
      .db(process.env.DB_NAME)
      .collection(process.env.COLL_NAME);

    const insertedValue = await collection.insertOne(filteredData);

    orderId = insertedValue.insertedId.toString();
  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: "Error occured",
    };
  }

  redirect(`/order/${orderId}`);
}

export async function saveOrderDetails(orderId, formData) {
  const data = Object.fromEntries(formData);

  let filteredData = {};

  for (let key in data) {
    if (!key.includes("$ACTION")) {
      filteredData[key] = data[key];
    }
  }

  const client = await connectToDB();

  const collection = client
    .db(process.env.DB_NAME)
    .collection(process.env.COLL_NAME);

  const insertedValue = await collection.updateOne(
    { _id: new ObjectId(orderId) },
    { $push: { orders: filteredData } }
  );

  console.log(insertedValue);
}
