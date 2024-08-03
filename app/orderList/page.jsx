import getOrderList from "@/app/utils/getOrderList";
import Link from 'next/link'

export default async function OrderPage() {
  const orders = await getOrderList();

  console.log(orders);

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
              <td><Link href={`/orderList/${order._id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
