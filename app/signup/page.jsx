"use client";

import { useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "@/app/components/bgGredient.module.css";

export default function SignUp() {
  const [message, setMessage] = useState();
  const [errorClass, setErrorClass] = useState();

  const userRef = useRef();
  const passRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const dataObj = {
      username: userRef.current.value,
      password: passRef.current.value,
    };
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });

    const data = await res.json();

    setMessage(data.message);
    if (data.error) {
      setErrorClass("bg-red-500 text-xl p-2 text-white");
    } else {
      setErrorClass("bg-green-500 text-xl p-2 text-white");
    }
  };

  const changeHandler = (e) => {
    message && setMessage("");
    errorClass && setErrorClass("");
  };

  return (
    <div
      className={`flex justify-center items-center h-[100vh] + ${styles.custom_bg}`}
    >
      <div className="absolute top-16 w-[30%] text-center">
        <p className={errorClass}>{message}</p>
      </div>
      <form
        className="flex flex-col border border-red-900 rounded-md gap-4 p-6 text-[1.2rem] w-full md:max-w-[30%] m-8"
        onSubmit={submitHandler}
        onChange={changeHandler}
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
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username">Password</label>
          <input
            type="password"
            className={`border rounded-md border-red-900 py-1.5 + ${styles.custom_bg}`}
            ref={passRef}
            required
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <button className="w-full border rounded-md bg-[#262626] text-white py-1.5">
            SignUp
          </button>
          <Link href={"/signin"} className="text-red-900 text-[1rem]">
            SignIn ?
          </Link>
        </div>
      </form>
    </div>
  );
}
