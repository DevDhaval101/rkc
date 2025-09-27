import Image from "next/image";
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#262626] flex items-center px-2 py-1">
      <Link href={"/"}>
        <div className="flex flex-col items-center pt-3 pb-3">
          <Image
            src="/rkc-logo-3.jpg"
            width={2026}
            height={2108}
            alt="logo"
            className="md:w-[200px] w-[100px]"
          ></Image>
          {/* <div className="flex flex-col items-center">
            <div className="flex md:gap-4 gap-2 border-b-2 border-white justify-center w-full px-2">
              <Image
                src="/spoon.png"
                alt="spoon logo"
                width={100}
                height={100}
                className="md:w-8 w-4"
              ></Image>
              <p className="text-white md:text-6xl text-xl font-bold">RKC</p>
              <Image
                src="/spoon.png"
                alt="spoon logo"
                width={100}
                height={100}
                className="md:w-8 w-4"
              ></Image>
            </div>
            <p className="text-white md:text-xl text-xs text-nowrap">
              We Belive In Quality
            </p>
          </div> */}
        </div>
      </Link>

      <div className="justify-self-center w-full text-white">
        <div className="flex flex-col items-center">
          <p className="md:text-2xl text-base white mb-4">Babukaka & Company</p>
          <div className="md:text-6xl text-3xl white flex flex-col items-center">
            <div className="flex md:gap-8 gap-2 font-bold">
              <p className="first-letter:text-[#F2B705]">RAM</p>
              <p className="first-letter:text-[#F2B705]">KRUSHNA</p>
            </div>
            <p className="first-letter:text-[#F2B705] font-bold">CATERERS</p>
          </div>
        </div>
      </div>
    </header>
  );
}

// red color - #F20519
// organge color - #D97904
