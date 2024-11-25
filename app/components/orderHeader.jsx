import ViewOrderInput from "@/app/ui/viewOrderInput";
import HeaderGuj from "@/app/components/headerGuj";

import styles from "./bgGredient.module.css";

export default function OrderHeader({ order, estimate, subOrderId }) {
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
        <div className="flex border-b-2 border-black border-dotted pb-2 justify-between md:text-xl py-4 px-1">
          <p className="flex gap-1">
            <span>ઓર્ડર તારીખ:</span>
            <span className="font-bold">{order.orderDate}</span>
          </p>
          <p className="flex gap-1">
            <span>સમય:</span>
            <span className="font-bold">{order.orderTime}</span>
          </p>
          <p className="flex gap-1">
            <span>માણસ:</span>
            <span className="font-bold">{order.guestCount}</span>
          </p>
        </div>
        <div className="md:text-xl text-base text-right pt-4 pr-2">
          Order ID: {`${orderId.slice(orderId.length - 6, orderId.length)}/${subOrderId + 1}`}
        </div>
      </div>
    </div>
  );
}
