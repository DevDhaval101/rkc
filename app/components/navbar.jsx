"use client";

import Link from "next/link";

import SignoutBtn from "@/app/ui/signoutBtn";

import { useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  const isSessionActive = session.status === "unauthenticated" ? false : true;

  // return (
  //   <nav className="bg-[#262626] text-white print:hidden p-2 font-bold">
  //     <ul className="flex gap-4">
  //       <li>
  //         <Link href="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link href="/createEstimate">Create Estimate</Link>
  //       </li>
  //       <li>
  //         <Link href="/orders/page/1">Orders</Link>
  //       </li>
  //       {isSessionActive ? (
  //         <li>
  //           <SignoutBtn />
  //         </li>
  //       ) : (
  //         <li>
  //           <Link href="/signin">SignIn</Link>
  //         </li>
  //       )}
  //     </ul>
  //   </nav>
  // );
  return (
    <nav className="bg-[#262626] text-white print:hidden p-2 font-bold flex justify-between">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/createEstimate">Create Estimate</Link>
        </li>
        <li>
          <Link href="/orders/page/1">Orders</Link>
        </li>
      </ul>
      <ul>
        {isSessionActive ? (
          <li>
            <SignoutBtn />
          </li>
        ) : (
          <li>
            <Link href="/signin">SignIn</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
