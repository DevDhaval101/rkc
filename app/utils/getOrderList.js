import connectToDB from "@/app/utils/connectToDB";

export default async function getOrderList(){
    const client = await connectToDB()

    const collection = client
      .db(process.env.DB_NAME)
      .collection(process.env.COLL_NAME);

    const orders = await collection.find({}).project({clientName: 1, clientMoNum: 1, orderDate:1, eventAddress: 1}).toArray()

    // console.log(orders)

    return orders
}