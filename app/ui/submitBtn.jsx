"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn({ name }) {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        className={` w-content border rounded-md px-2 py-1 md:text-xl text-base ${
          pending ? "bg-slate-300" : "bg-green-400"
        } `}
        disabled={pending}
      >
        {pending ? "Loading..." : name}
      </button>
    </div>
  );
}
