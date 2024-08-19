import ViewOrderInput from "@/app/ui/viewOrderInput";
import styles from "./bgGredient.module.css";
import styles2 from "@/app/components/print.module.css";

import HeaderGuj from "@/app/components/headerGuj";

export default function OrderMainPage({ estimate }) {
  return (
    <div className={styles2.print_container}>
      <div>
        <HeaderGuj />
      </div>
      <div className={styles2.print_height}>
        <form
          action=""
          className={`flex flex-col gap-2 px-5 py-2 ${styles.custom_bg} ${styles2.print_height} pt-8 pb-8`}
        >
          <div>
            <ViewOrderInput
              tag="નામ:"
              value={estimate.clientName}
              margin={true}
            />
          </div>
          <div>
            <ViewOrderInput
              tag="મોબાઇલ નંબર:"
              value={estimate.clientMoNum}
              margin={true}
            />
          </div>
          <div>
            <ViewOrderInput
              tag="ઘરનુ સરનામુ:"
              value={estimate.clientAdd}
              margin={true}
            />
          </div>
          <div>
            <ViewOrderInput
              tag="ઓર્ડર તારીખ:"
              value={estimate.orderDate}
              margin={true}
            />
          </div>
          <div>
            <ViewOrderInput
              tag="પ્રસંગનુ સરનામુ:"
              value={estimate.eventAddress}
              margin={true}
            />
          </div>
          <div>
            <div>
              <label
                htmlFor=""
                className="md:text-2xl text-base text-red-900 font-bold print:text-2xl"
              >
                સ્થળે રહેનારના નામ:
              </label>
            </div>
            <div className="pl-4">
              <ViewOrderInput
                tag="નામ:"
                value={estimate.spotPerson_1}
                margin={true}
              />
              <ViewOrderInput
                tag="મોબાઇલ નંબર:"
                value={estimate.spotPerson_1_Mo}
                margin={true}
              />
              <ViewOrderInput
                tag="નામ:"
                value={estimate.spotPerson_2}
                margin={true}
              />
              <ViewOrderInput
                tag="મોબાઇલ નંબર:"
                value={estimate.spotPerson_2_Mo}
                margin={true}
              />
            </div>
          </div>
          <div>
            <ViewOrderInput
              tag="હસ્તક:"
              value={estimate.referer}
              margin={true}
            />
          </div>
          <div>
            <ViewOrderInput
              tag="મોબાઇલ નંબર:"
              value={estimate.refererMo}
              margin={true}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
