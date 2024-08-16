import HeaderGuj from "@/app/components/headerGuj";
import OrderHeader from "@/app/components/orderHeader";

import styles from "./bgGredient.module.css";
import styles2 from "@/app/components/print.module.css";


export default function Extra({ order, estimate }) {
  return (
    <div className={`flex flex-col ${styles2.print_container} h-full`}>
      <OrderHeader order={order} estimate={estimate}/>
      <div className={`${styles.custom_bg} flex flex-col gap-4 flex-grow py-4`}>
        <div className="pl-5 md:pl-10">
          <p className="text-black text-2xl font-bold pb-2 underline">Extra</p>
          <CreateLineItem tag={"PRO:"} value={order.pro} />
          <CreateLineItem tag={"બોઇઝ:"} value={order.boys} />
          <CreateLineItem
            tag={"સર્વિસ માટે બહનો:"}
            value={order.servingStaff}
          />
          <CreateLineItem tag={"ડેકોરેશન:"} value={order.decoration} />
          <CreateLineItem tag={"પાણી બોટલ 200ml:"} value={order.waterBottle} />
          <CreateLineItem tag={"વિદાઈ ચા:"} value={order.FarewellTea} />
        </div>
        <div className="pl-5 md:pl-10">
          <p className="text-black text-2xl font-bold pb-2 underline">પાર્ટીની જવાબદારી</p>
          <CreateLineItem
            tag={"જગ્યા + લાઇટીંગ સામાન:"}
            value={order.spaceAndLight}
          />
          <CreateLineItem tag={"કચરાપેટી:"} value={order.dustbin} />
          <CreateLineItem tag={"વાપરવાનુું પાણી"} value={order.water} />
          <CreateLineItem tag={"વૉશ બેસિન:"} value={order.washBasin} />
          <CreateLineItem tag={"કાઉન્ટર ટેબલ:"} value={order.counterTable} />
          <CreateLineItem
            tag={"ફાર્મ ની ડિપોઝિટ:"}
            value={order.farmDeposite}
          />
          <CreateLineItem
            tag={"વધારાનુ ="}
            value={order.addtionalRespoParty}
          />
        </div>
        <div className="pl-5 md:pl-10 flex-grow">
          <p className="text-black text-2xl font-bold pb-2 underline">રસોયાની જવાબદારી</p>
          <CreateLineItem tag={"વાસણ:"} value={order.crockery} />
          <CreateLineItem tag={"ગેસ:"} value={order.gas} />
          <CreateLineItem tag={"મજૂર:"} value={order.labour} />
          <CreateLineItem tag={"પીરસવાનુ:"} value={order.serving} />
          <CreateLineItem
            tag={"પીવાનુું પાણી ૨૦ લી.જગ:"}
            value={order.waterJug}
          />
          <CreateLineItem
            tag={"વધારાનુ ="}
            value={order.addtionalRespoCaterer}
          />
        </div>
      </div>
    </div>
  );
}

function CreateLineItem({ tag, value }) {
  return (
    <div className="flex gap-2">
      <p className="text-red-900 font-bold">{tag}</p>
      <p>{value ? (value === 'on' ? "Yes" : value) : "No"}</p>
    </div>
  );
}
