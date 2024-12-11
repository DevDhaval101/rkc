"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import styles from "@/app/components/bgGredient.module.css";

export default function SignIn() {
  const userRef = useRef();
  const passRef = useRef();

  const router = useRouter();

  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    const password = passRef.current.value;

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    // console.log(res);

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/createEstimate");
    }
  };

  const changeHandler = () => {
    error && setError("");
  };

  return (
    <div
      className={`flex justify-center items-center h-[100vh] + ${styles.custom_bg}`}
    >
      <form
        onSubmit={submitHandler}
        onChange={changeHandler}
        className="flex flex-col border border-red-900 rounded-md gap-4 p-6 text-[1.2rem] w-full md:max-w-[30%] m-8"
      >
        <div className="flex flex-col items-center gap-2 justify-center">
          <Image
            src="/logo.png"
            width={700}
            height={700}
            alt="logo"
            className="w-[100px]"
          ></Image>
          <h1 className="text-center text-4xl">RKC</h1>
        </div>
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className={`border rounded-md border-red-900 py-1.5 + ${styles.custom_bg}`}
            ref={userRef}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label htmlFor="username">Password</label>
            <Link href={"/auth/reset"} className="text-red-900 text-[1rem]">
              Forgot password ?
            </Link>
          </div>
          <input
            type="password"
            className={`border rounded-md border-red-900 py-1.5 + ${styles.custom_bg}`}
            ref={passRef}
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-red-500 h-[.8rem] text-sm">{error}</p>
          <button className="w-full rounded-md bg-[#262626] hover:bg-[#353535] text-white py-1.5">
            SignIn
          </button>
          <Link href={"/signup"} className="text-red-900 text-[1rem]">
            SignUp ?
          </Link>
        </div>
      </form>
    </div>
  );
}
