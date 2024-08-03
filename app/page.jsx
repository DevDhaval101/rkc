import Image from "next/image";

import Header from '@/app/components/header'
import Contact from '@/app/components/contact'

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="bg-[#F2B705] h-3"></div>
        <p className="bg-[#262626] text-white text-center text-xl py-1 capitalize tracking-widest">All Events are accepted</p>
      </div>
      <Contact />
    </div>
  );
}

