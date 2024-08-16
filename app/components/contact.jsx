import Image from "next/image";

import styles from "./bgGredient.module.css";

export default function Contact() {
  return (
    <div className={`flex flex-col items-center gap-8 h-[100%] + ${styles.custom_bg}`}>
      <div>
        <Image
          src="/logo.png"
          width={700}
          height={700}
          alt={"logo"}
          className="md:w-[200px] w-[100px]"
        ></Image>
      </div>
      <div className="flex md:gap-6 gap-2 md:text-6xl text-4xl font-bold">
        <p className="first-letter:text-[#F20519]">રામકૃષ્ણ</p>
        <p className="first-letter:text-[#F20519]">કેટરર્સ</p>
      </div>
      <div className="flex flex-col gap-2 font-medium uppercase">
        <p className="text-2xl flex gap-2 items-center">
          Kiritbhai -<a href="tel:9925906650">99259 06650</a>
          <a href="https://api.whatsapp.com/send?phone=9925906650">
            <Image
              src="/whatsapp.png"
              width={30}
              height={30}
              alt="Whatsapp logo"
            ></Image>
          </a>
        </p>
        <p className="text-xl">
          Sureshbhai - 99259 06645
        </p>
        <p className="text-xl flex gap-2 items-center">
          Dhavalbhai -<a href="tel:9712336832">97123 36832</a>
          <a href="https://api.whatsapp.com/send?phone=9712336832">
            <Image
              src="/whatsapp.png"
              width={20}
              height={20}
              alt="Whatsapp logo"
            ></Image>
          </a>
        </p>
      </div>
    </div>
  );
}
