import connectToDB from "@/app/utils/connectToDB";
import { ObjectId } from "mongodb";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const orderId = searchParams.get("orderId");
  const subOrderId = parseInt(searchParams.get("subOrderId"));

  // console.log("orderId", orderId)
  // console.log("subOrderId", subOrderId)


  let subOrder;
  let totalSubOrder;

  try {
    const client = await connectToDB();

    const collection = client
      .db(process.env.DB_NAME)
      .collection(process.env.COLL_NAME);

    const result = await collection.findOne({ _id: new ObjectId(orderId) });

    subOrder = result.orders[subOrderId];
    totalSubOrder = result.orders.length;

    // console.log(subOrder)

  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: "Error occured",
    };
  }

  return Response.json({
    ...subOrder,
    totalSubOrder
  });
}
