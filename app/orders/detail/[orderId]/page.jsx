export const dynamic = "force-dynamic";

import HeaderGuj from "@/app/components/headerGuj";
import ViewOrderInput from "@/app/ui/viewOrderInput";

import getOrderDetail from "@/app/utils/getOrderDetail";

import DisplayOrderDetail from "@/app/components/displayOrderDetail";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function ViewOrderPage({ params }) {

  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    redirect("/signin");
    return;
  }

  const { orderId } = params;
  const estimate = await getOrderDetail(orderId);

  return (
    <div>
      <div>
        <DisplayOrderDetail estimate={estimate} />
      </div>
    </div>
  );
}
