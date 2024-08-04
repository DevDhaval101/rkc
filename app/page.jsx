import Image from "next/image";

import Header from "@/app/components/header";
import Contact from "@/app/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <div>
        <Header />
      </div>
      <div>
        <div className="bg-[#F2B705] h-3"></div>
        <p className="bg-[#262626] text-white text-center text-xl py-1 capitalize tracking-widest">
          All Events are accepted
        </p>
      </div>
      <div className="flex-grow">
        <Contact />
      </div>
    </div>
  );
}
