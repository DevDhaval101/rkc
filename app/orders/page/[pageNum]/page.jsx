export const dynamic = "force-dynamic";

import getOrderList from "@/app/utils/getOrderList";
import Link from "next/link";

import DeleteBtn from "@/app/orders/page/[pageNum]/deleteBtn";
import Pagination from "@/app/ui/pagination";

import HeaderGuj from "@/app/components/headerGuj";

import { getOrderCount, getOrderByPageNum } from "@/app/serverActions/actions";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import { AiFillEye } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export default async function OrderPage({ params, searchParams }) {
  const session = await getServerSession(authOptions);
  // console.log(session);

  if (!session) {
    redirect("/signin");
  }
  const { pageNum } = params;
  const { docPerPage } = searchParams;

  const pageSize = Number(docPerPage) || 10;

  const orders = await getOrderByPageNum(pageNum, pageSize);
  const docCount = await getOrderCount();

  const maxPageNum = Math.ceil(Number(docCount) / pageSize);

  const srNo = (pageNum - 1) * pageSize;

  return (
    <div className="w-full">
      <div>
        <HeaderGuj />
      </div>
      <div className="w-full mt-5 overflow-scroll md:text-base text-sm min-h-96 relative pt-12">
        <table className="w-[90%] mx-auto border-[#262626] border-2">
          <thead className="border font-bold bg-[#262626] text-white">
            <tr className="border">
              <th className="border md:p-4">અનુક્રમ નંબર</th>
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
                  <Link href={`/orders/detail/${order._id}`}>
                    <AiFillEye color="rgb(59, 139, 246)" size="1.5rem" />
                  </Link>
                  <Link
                    href={`/updateOrder/${order._id}`}
                  >
                    <AiFillEdit color="rgb(249, 115, 22)" size="1.5rem" />
                  </Link>
                  <DeleteBtn orderId={String(order._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <Pagination
            pageNum={pageNum}
            maxPageNum={maxPageNum}
            docPerPage={docPerPage}
          />
        </div>
      </div>
    </div>
  );
}
