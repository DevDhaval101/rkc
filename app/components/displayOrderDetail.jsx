import ViewOrderInput from "@/app/ui/viewOrderInput";

import OrderHeader from "@/app/components/orderHeader";
import OrderItem from "@/app/components/orderItem";
import OrderMainPage from "@/app/components/orderMainPage";

import styles from "./bgGredient.module.css";

export default function DisplayOrderDetail({ estimate }) {
  const orders = estimate.orders;
  return (
    <div>
      <div>
        <OrderMainPage estimate={estimate} />
      </div>
      {orders && orders.map((order, index) => (
        <div key={`${order}-${index}`}>
          <div>
            <OrderHeader order={order} estimate={estimate} />
          </div>
          <div className={`pl-10 pb-10 ${styles.custom_bg}`}>
            <OrderItem order={order} />
          </div>
        </div>
      ))}
    </div>
  );
}
