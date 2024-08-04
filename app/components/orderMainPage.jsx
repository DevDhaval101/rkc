import ViewOrderInput from "@/app/ui/viewOrderInput";
import styles from "./bgGredient.module.css";


export default function OrderMainPage({estimate}) {
  return (
    <form action="" className={`flex flex-col gap-2 px-5 py-2 ${styles.custom_bg}`}>
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
        <ViewOrderInput tag="પ્રસંગનુ સરનામુ:" value={estimate.eventAddress} />
      </div>
      <div>
        <div>
          <label htmlFor="" className="md:text-2xl text-base">
            સ્થળે રહેનારના નામ:
          </label>
        </div>
        <div className="pl-4">
          <ViewOrderInput tag="નામ:" value={estimate.spotPerson_1} />
          <ViewOrderInput tag="મોબાઇલ નંબર:" value={estimate.spotPerson_1_Mo} />
          <ViewOrderInput tag="નામ:" value={estimate.spotPerson_2} />
          <ViewOrderInput tag="મોબાઇલ નંબર:" value={estimate.spotPerson_2_Mo} />
        </div>
      </div>
    </form>
  );
}
