import HeaderGuj from "@/app/components/headerGuj";

import styles from "./bgGredient.module.css";
import styles2 from "@/app/components/print.module.css";


export default function Thankyou() {
  return (
    <div className={`${styles.custom_bg} ${styles2.print_container} flex flex-col`}>
      <HeaderGuj />
      <div className="flex justify-center mt-8 flex-grow items-center">
        <div className="flex flex-col items-center gap-8 border-2 border-[#262626] w-fit h-fit p-8 rounded-xl mb-8">
          <p className="text-8xl font-bold">Thank You!</p>
          <p className="text-5xl font-bold">Visit Again</p>
        </div>
      </div>
    </div>
  );
}
