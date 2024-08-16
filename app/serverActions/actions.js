"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

  redirect(`/createOrder/${orderId}`);
}

export async function saveOrderDetails(orderId, prevState, formData) {
  const data = {};

  for (let [key, value] of formData.entries()) {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }
  let filteredData = {};

  for (let key in data) {
    if (!key.includes("$ACTION")) {
      filteredData[key] = data[key];
    }
  }

  try {
    const client = await connectToDB();

    const collection = client
      .db(process.env.DB_NAME)
      .collection(process.env.COLL_NAME);

    const updatedValue = await collection.updateOne(
      { _id: new ObjectId(orderId) },
      { $push: { orders: filteredData } }
    );

    return {
      success: true,
      message: "Order saved successfully!",
    };
     
    
  } catch (error) {
    console.log(error.message);

    return {
      success: false,
      message: "Error occured while saving order please try again!",
    };
  }

  // console.log(formData);
}

export async function deleteOrder(orderId) {
  const client = await connectToDB();

  const collection = client
    .db(process.env.DB_NAME)
    .collection(process.env.COLL_NAME);

  const result = await collection.findOneAndDelete({
    _id: new ObjectId(orderId),
  });

  // console.log(result)

  revalidatePath("/orderList");
}

export async function getOrderCount(){
  const client = await connectToDB()

  const collection = client.db(process.env.DB_NAME).collection(process.env.COLL_NAME)

  const docCount = await collection.countDocuments()

  return docCount
}

export async function getOrderByPageNum(pageNum, pageSize){

  const skipVal = pageSize * (pageNum - 1)

  const client = await connectToDB()

  const collection = client.db(process.env.DB_NAME).collection(process.env.COLL_NAME)

  const docCount = await collection.find({}).sort({_id: -1}).skip(skipVal).limit(pageSize).project({_id: 1, clientName: 1, clientMoNum: 1, orderDate: 1, eventAddress: 1 }).toArray()

  return docCount
}


