import ViewOrderInput from "@/app/ui/viewOrderInput";

import OrderHeader from "@/app/components/orderHeader";
import OrderItem from "@/app/components/orderItem";
import OrderMainPage from "@/app/components/orderMainPage";
import Extra from "@/app/components/extra";
import TAndC from "@/app/components/tAndC";
import Thankyou from "@/app/components/thankyou";
import OrderFrontPage from "@/app/components/orderFrontPage";
import Contact from "@/app/components/contact";

import styles from "./bgGredient.module.css";
import styles2 from "@/app/components/print.module.css";

export default function DisplayOrderDetail({ estimate }) {
  const orders = estimate.orders;
  return (
    <div>
      <div
        className={`${styles2.print_container} ${styles.custom_bg} flex flex-col pb-4`}
      >
        <div>
          <OrderFrontPage />
        </div>
        <div className="flex-grow">
          <Contact />
        </div>
      </div>
      <div>
        <OrderMainPage estimate={estimate} />
      </div>
      <div>
        {orders &&
          orders.map((order, index) => (
            <div key={`${order}-${index}`}>
              <div className={`${styles2.print_container} flex flex-col`}>
                <div>
                  <OrderHeader
                    order={order}
                    estimate={estimate}
                    subOrderId={index}
                  />
                </div>
                <div
                  className={`md:pl-10 md:pb-10 pl-5 pb-5 ${styles.custom_bg} flex-grow print:break-after-page`}
                >
                  <OrderItem order={order} />
                </div>
              </div>
              <div>
                {order.hasExtra && (
                  <Extra order={order} estimate={estimate} subOrderId={index} />
                )}
              </div>
            </div>
          ))}
        <div>
          <TAndC />
        </div>
        <div className={`${styles2.print_container}`}>
          <Thankyou />
        </div>
      </div>
    </div>
  );
}
