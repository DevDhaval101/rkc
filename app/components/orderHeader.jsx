import ViewOrderInput from "@/app/ui/viewOrderInput";
import HeaderGuj from "@/app/components/headerGuj";

import styles from "./bgGredient.module.css";

export default function OrderHeader({ order, estimate }) {
  const orderId = String(estimate._id);
  return (
    <div>
      <div>
        <HeaderGuj />
      </div>
      <div className={styles.custom_bg}>
        {/* <div className="flex border-b-2 border-black border-dotted pb-2">
          <ViewOrderInput tag="ઓર્ડર તારીખ:" value={order.orderDate} margin={true} />
          <ViewOrderInput tag="સમય:" value={order.orderTime} margin={true}/>
          <ViewOrderInput tag="માણસ:" value={order.guestCount} margin={true}/>
        </div> */}
        <div className="flex border-b-2 border-black border-dotted pb-2 justify-between md:text-xl p-4">
          <p className="flex gap-2">
            <span>ઓર્ડર તારીખ:</span>
            {order.orderDate}
          </p>
          <p className="flex gap-2">
            <span>સમય:</span>
            {order.orderTime}
          </p>
          <p className="flex gap-2">
            <span>માણસ:</span>
            {order.guestCount}
          </p>
        </div>
        <div className="md:text-xl text-base text-right pt-4 pr-2">
          Order ID: {orderId.slice(orderId.length - 6, orderId.length)}
        </div>
      </div>
    </div>
  );
}
