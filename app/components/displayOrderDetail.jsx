import ViewOrderInput from "@/app/ui/viewOrderInput";

import OrderHeader from "@/app/components/orderHeader";
import OrderItem from "@/app/components/orderItem";
import OrderMainPage from "@/app/components/orderMainPage";

import styles from "./bgGredient.module.css";
import styles2 from "@/app/components/print.module.css";

export default function DisplayOrderDetail({ estimate }) {
  const orders = estimate.orders;
  return (
    <div>
      <div>
        <OrderMainPage estimate={estimate} />
      </div>
      <div className={`${styles2.print_container}`}>
        {orders &&
          orders.map((order, index) => (
            <div key={`${order}-${index}`} className="print:h-full print:flex print:flex-col">
              <div>
                <OrderHeader order={order} estimate={estimate} />
              </div>
              <div className={`pl-10 pb-10 ${styles.custom_bg} print:grow`}>
                <OrderItem order={order} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
