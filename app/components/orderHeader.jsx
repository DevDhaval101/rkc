import ViewOrderInput from "@/app/ui/viewOrderInput";
import HeaderGuj from "@/app/components/headerGuj";

import styles from "./bgGredient.module.css";

export default function OrderHeader({ order, estimate }) {
  // console.log(order);
  return (
    <div>
      <div>
        <HeaderGuj />
      </div>
      <div className={styles.custom_bg}>
        <div className="flex border-b-2 border-black border-dotted pb-2">
          <ViewOrderInput tag="ઓર્ડર તારીખ:" value={order.orderDate} />
          <ViewOrderInput tag="સમય:" value={order.orderTime} />
          <ViewOrderInput tag="માણસ:" value={order.guestCount} />
        </div>
        <div>
          <div className="text-2xl text-center mt-5 text-red-900 font-bold underline">
            ખાના ખજાના
          </div>
          <div className="text-xl text-right">
            Order ID: {String(estimate._id)}
          </div>
        </div>
      </div>
    </div>
  );
}
