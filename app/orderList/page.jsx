import getOrderList from "@/app/utils/getOrderList";
import Link from "next/link";

import DeleteBtn from "@/app/ui/deleteBtn";

export default async function OrderPage() {
  const orders = await getOrderList();

  return (
    <div className="w-full">
      <table className="w-[90%] mx-auto border-[#262626] border-2">
        <thead className="border font-bold">
          <tr className="border">
            <th className="border">નામ</th>
            <th className="border">મોબાઇલ નંબર</th>
            <th className="border">ઓર્ડર તારીખ</th>
            <th className="border">પ્રસંગનુ સરનામુ</th>
            <th className="border">CTA</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="border" key={order._id}>
              <td className="border">{order.clientName}</td>
              <td className="border">{order.clientMoNum}</td>
              <td className="border">{order.orderDate}</td>
              <td className="border">{order.eventAddress}</td>
              <td className="flex gap-2 items-center justify-center">
                <Link
                  href={`/orderList/${order._id}`}
                  className="bg-blue-500 rounded-md px-2 py-1"
                >
                  View
                </Link>
                <DeleteBtn orderId={String(order._id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
