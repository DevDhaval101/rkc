import HeaderGuj from "@/app/components/headerGuj";
import ViewOrderInput from "@/app/ui/viewOrderInput";

import getOrderDetail from "@/app/utils/getOrderDetail";

import styles from "./order_id.module.css";

export default async function ViewOrderPage({ params }) {
  const { orderId } = params;
  const estimate = await getOrderDetail(orderId);
  const order = Object.values(estimate.orders[0]);
  // console.log(order);
  return (
    <div>
      <HeaderGuj />
      <div className={styles.custom_bg}>
        <form action="" className="flex flex-col gap-2 px-5 py-2">
          <div>
            <ViewOrderInput tag="નામ:" value={estimate.clientName} />
          </div>
          <div>
            <ViewOrderInput tag="મોબાઇલ નંબર" value={estimate.clientMoNum} />
          </div>
          <div>
            <ViewOrderInput tag="ઘરનુ સરનામુ:" value={estimate.clientAdd} />
          </div>
          <div>
            <ViewOrderInput tag="ઓર્ડર તારીખ:" value={estimate.orderDate} />
          </div>
          <div>
            <ViewOrderInput
              tag="પ્રસંગનુ સરનામુ:"
              value={estimate.eventAddress}
            />
          </div>
          <div>
            <div>
              <label htmlFor="" className="text-2xl">
                સ્થળે રહેનારના નામ:
              </label>
            </div>
            <div>
              <ViewOrderInput tag="નામ:" value={estimate.spotPerson_1} />
              <ViewOrderInput
                tag="મોબાઇલ નંબર:"
                value={estimate.spotPerson_1_Mo}
              />
              <ViewOrderInput tag="નામ:" value={estimate.spotPerson_2} />
              <ViewOrderInput
                tag="મોબાઇલ નંબર:"
                value={estimate.spotPerson_2_Mo}
              />
            </div>
          </div>
        </form>
        <form action="" className="flex flex-col gap-2 px-5 py-2">
          <div>
            <div className="flex border-b-2 border-black border-dotted pb-2">
              <ViewOrderInput
                tag="ઓર્ડર તારીખ:"
                value={estimate.orders[0].orderDate}
              />
              <ViewOrderInput tag="સમય:" value={estimate.orders[0].orderTime} />
              <ViewOrderInput
                tag="માણસ:"
                value={estimate.orders[0].guestCount}
              />
            </div>
            <div>
              <div className="text-2xl text-center mt-5 text-red-900 font-bold">ખાના ખજાના</div>
              <div className="text-xl text-right">Order ID: {String(estimate._id)}</div>
            </div>
            <div className="text-2xl ml-5">
              <ul className="list-disc">
                {order.map(
                  (val, index) =>
                    index > 2 &&
                    index < 22 &&
                    (Array.isArray(val)
                      ? val.map(
                          (item, subIndex) =>
                            item && <li key={`${index}-${subIndex}`}>{item}</li>
                        )
                      : val.length > 0 && <li key={index}>{val}</li>)
                )}
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
