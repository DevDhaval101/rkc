import HeaderGuj from "@/app/components/headerGuj";
import ViewOrderInput from "@/app/ui/viewOrderInput";

import getOrderDetail from "@/app/utils/getOrderDetail";

import DisplayOrderDetail from "@/app/components/displayOrderDetail";

export default async function ViewOrderPage({ params }) {
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
