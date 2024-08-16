"use client";

import { useRouter } from "next/navigation";

export default function Pagination({ pageNum, maxPageNum }) {
  const router = useRouter();

  function incPage() {
    const newPageNum = Math.min(Number(pageNum) + 1, maxPageNum);
    router.push(`/orders/page/${newPageNum}`);
  }

  function decPage() {
    const newPageNum = Math.max(Number(pageNum) - 1, 1);
    router.push(`/orders/page/${newPageNum}`);
  }

  function changeHandler(e) {
    const newPageNum = Number(e.target.value) + 1;
    if (newPageNum <= maxPageNum && newPageNum > 0) {
      router.push(`/orders/page/${newPageNum}`);
    }
  }

  return (
    <div>
      <div className="flex text-xl justify-center gap-2">
        <button className="border border-black px-2 py-1 min-w-8" onClick={decPage}>&larr;</button>
        <p className="border border-black px-2 py-1 min-w-8">1</p>
        <input
          type="text"
          value={pageNum}
          className="border border-black px-2 py-1 min-w-8 max-w-12 text-center"
          onChange={changeHandler}
        />
        <p className="border border-black px-2 py-1 min-w-8">{maxPageNum}</p>
        <button className="border border-black px-2 py-1 min-w-8" onClick={incPage}>&rarr;</button>
      </div>
    </div>
  );
}
