export const dynamic = "force-dynamic";

import getOrderList from "@/app/utils/getOrderList";
import Link from "next/link";

import DeleteBtn from "@/app/ui/deleteBtn";
import Pagination from "@/app/ui/pagination";

import HeaderGuj from "@/app/components/headerGuj";

import { getOrderCount, getOrderByPageNum } from "@/app/serverActions/actions";

export default async function OrderPage({ params }) {
  const { pageNum } = params;
  const pageSize = 5

  // const orders = await getOrderList();
  const orders = await getOrderByPageNum(pageNum, pageSize)
  const docCount = await getOrderCount()

  const maxPageNum = Math.ceil(Number(docCount)/pageSize)
  // console.log(docCount)

  const srNo = (pageNum - 1) * pageSize

  return (
    <div className="w-full">
      <div>
        <HeaderGuj />
      </div>
      <div className="w-full mt-5 overflow-scroll md:text-base text-sm min-h-96">
        <table className="w-[90%] mx-auto border-[#262626] border-2">
          <thead className="border font-bold">
            <tr className="border">
              <th className="border">અનુક્રમ નંબર</th>
              <th className="border">નામ</th>
              <th className="border">મોબાઇલ નંબર</th>
              <th className="border">ઓર્ડર તારીખ</th>
              <th className="border">પ્રસંગનુ સરનામુ</th>
              <th className="border">CTA</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr className="border" key={order._id}>
                <td className="border text-center">{srNo + index + 1}</td>
                <td className="border">{order.clientName}</td>
                <td className="border">{order.clientMoNum}</td>
                <td className="border">{order.orderDate}</td>
                <td className="border">{order.eventAddress}</td>
                <td className="flex md:flex-row flex-col gap-2 items-center justify-center m-1">
                  <Link
                    href={`/orders/detail/${order._id}`}
                    className="bg-blue-500 rounded-md px-2 py-1"
                  >
                    View
                  </Link>
                  <DeleteBtn orderId={String(order._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Pagination pageNum={pageNum} maxPageNum={maxPageNum}/>
      </div>
    </div>
  );
}
