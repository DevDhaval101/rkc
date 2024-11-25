import DetailForm from "@/app/updateOrder/[orderId]/detailForm";
import HeaderGuj from "@/app/components/headerGuj";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { redirect } from "next/navigation";

export default async function Test({ params }) {
  // console.log(params);
  const session = await getServerSession(authOptions);
  // console.log(session);

  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <div>
        <HeaderGuj />
      </div>
      <div className="mx-4">
        <DetailForm orderId={params.orderId} />
      </div>
    </div>
  );
}
