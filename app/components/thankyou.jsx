import HeaderGuj from "@/app/components/headerGuj";

import styles from "./bgGredient.module.css";
import styles2 from "@/app/components/print.module.css";

import Image from "next/image";

export default function Thankyou() {
  return (
    <div
      className={`${styles.custom_bg} ${styles2.print_container} flex flex-col`}
    >
      <HeaderGuj />
      <div className="flex justify-center mt-8 flex-grow items-center mx-4">
        <div className="flex flex-col items-center gap-8 border-2 border-[#262626] w-full h-fit p-8 rounded-xl mb-8">
          <Image
            src="/financial-service.jpeg"
            width={1592}
            height={918}
            className="h-[300px] w-auto"
          ></Image>
          <p className="text-8xl font-bold">Thank You!</p>
          <p className="text-5xl font-bold">Visit Again</p>
        </div>
      </div>
    </div>
  );
}
