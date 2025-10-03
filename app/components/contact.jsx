import Image from "next/image";

import styles from "./bgGredient.module.css";

export default function Contact() {
  return (
    <div
      className={`flex flex-col items-center gap-8 h-[100%] + ${styles.custom_bg}`}
    >
      <div className="mt-4">
        <Image
          src="/rkc-logo-3.jpg"
          width={2026}
          height={2108}
          alt={"logo"}
          className="md:w-[200px] w-[100px] print:w-[350px]"
        ></Image>
      </div>
      <div className="flex md:gap-6 gap-2 md:text-6xl text-4xl font-bold print:text-8xl">
        <p className="first-letter:text-[#F20519]">રામકૃષ્ણ</p>
        <p className="first-letter:text-[#F20519]">કેટરર્સ</p>
      </div>
      <div className="flex flex-col gap-2 font-medium uppercase print:mt-8 print:gap-4">
        <p className="text-2xl flex gap-2 items-center print:text-4xl">
          Kiritbhai :<a href="tel:+919925906650">+9199259 06650</a>
          <a href="https://api.whatsapp.com/send?phone=9925906650">
            <Image
              src="/whatsapp.png"
              width={30}
              height={30}
              alt="Whatsapp logo"
            ></Image>
          </a>
        </p>
        <p className="text-2xl flex gap-2 items-center print:text-4xl">
          Dhavalbhai :<a href="tel:+919712336832">+9197123 36832</a>
          <a href="https://api.whatsapp.com/send?phone=9712336832">
            <Image
              src="/whatsapp.png"
              width={30}
              height={30}
              alt="Whatsapp logo"
            ></Image>
          </a>
        </p>
        <p className="text-2xl print:text-4xl">Sureshbhai : +9199259 06645</p>
      </div>
    </div>
  );
}
