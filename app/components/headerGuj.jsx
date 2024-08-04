import Image from "next/image";

export default function HeaderGuj() {
  return (
    <header className="bg-[#262626] flex items-center px-2 py-1">
      <div className="flex flex-col items-center px-4">
        <Image
          src="/logo.png"
          width={700}
          height={700}
          alt="logo"
          className="w-[100px]"
        ></Image>
        <div className="flex flex-col items-center">
          <div className="flex gap-4 border-b-2 border-white justify-center w-full px-2">
            <Image
              src="/spoon.png"
              alt="spoon logo"
              width={100}
              height={100}
              className="w-8"
            ></Image>
            <p className="text-white text-6xl font-bold">RKC</p>
            <Image
              src="/spoon.png"
              alt="spoon logo"
              width={100}
              height={100}
              className="w-8"
            ></Image>
          </div>
          <p className="text-white text-xl">We Belive In Quality</p>
        </div>
      </div>

      <div className="justify-self-center w-full text-white">
        <div className="flex flex-col items-center">
          <p className="text-2xl white mb-4">બાબુકાકા & કંપની </p>
          <div className="text-6xl white flex flex-col items-center">
            <div className="flex gap-8 font-bold">
              <p className="first-letter:text-[#F2B705]">રામકૃષ્ણ</p>
              <p className="first-letter:text-[#F2B705]">કેટરર્સ</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// red color - #F20519
// organge color - #D97904
