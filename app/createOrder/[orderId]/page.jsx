import DetailForm from "@/app/components/detailForm";
import HeaderGuj from "@/app/components/headerGuj";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { redirect } from "next/navigation";

import connectToDB from "@/app/utils/connectToDB";
import { ObjectId } from "mongodb";

export default async function Test({ params }) {
  // console.log(params);
  const session = await getServerSession(authOptions);
  // console.log(session);
  const nosOfSubOrder = await getNumOfSubOrder(params.orderId)

  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <div>
        <HeaderGuj />
      </div>
      <div className="mx-4">
        <DetailForm orderId={params.orderId} nosOfSubOrder={nosOfSubOrder}/>
      </div>
    </div>
  );
}

async function getNumOfSubOrder(orderId) {
  try {
    const client = await connectToDB();

    const collection = client
      .db(process.env.DB_NAME)
      .collection(process.env.COLL_NAME);

    const result = await collection.findOne({
      _id: new ObjectId(orderId),
    });

    const nosOfSubOrder = result.orders.length

    console.log('nosOfSubOrder:', nosOfSubOrder)

    return nosOfSubOrder;
  } catch (error) {
    console.log(error);
  }
}
