"use client";

import FlashMessage from "@/app/components/FlashMessage";

export default function Error({ error, reset }) {
  return (
    <div>
      <FlashMessage error={error.message}/>
      <button
        onClick={() => reset()}
        className="border border-black rounded-md px-2 py-1"
      >
        Re-Try
      </button>
    </div>
  );
}
