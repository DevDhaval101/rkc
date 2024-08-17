"use client";

import { useRouter } from "next/navigation";
import {useRef} from 'react'

export default function Pagination({ pageNum, maxPageNum, docPerPage }) {
  const router = useRouter();
  const selectRef = useRef()

  function incPage() {
    const newPageNum = Math.min(Number(pageNum) + 1, maxPageNum);
    const pageSize = Number(selectRef.current.value)
    router.push(`/orders/page/${newPageNum}?docPerPage=${pageSize}`);
  }

  function decPage() {
    const newPageNum = Math.max(Number(pageNum) - 1, 1);
    const pageSize = Number(selectRef.current.value)
    router.push(`/orders/page/${newPageNum}?docPerPage=${pageSize}`);
  }

  function changeHandler(e) {
    const newPageNum = Number(e.target.value);
    const pageSize = Number(selectRef.current.value)
    if (newPageNum <= maxPageNum && newPageNum > 0) {
      router.push(`/orders/page/${newPageNum}?docPerPage=${pageSize}`);
    }
  }

  function selectionHandler(e) {
    const docPerPage = Number(e.target.value);
    router.push(`/orders/page/${pageNum}?docPerPage=${docPerPage}`)
  }

  return (
    <div className="mb-4">
      <div className="flex md:text-xl text-base justify-center gap-2">
        <button
          className="border border-black px-2 py-1 min-w-8 bg-green-400 rounded-md hover:bg-green-600"
          onClick={decPage}
        >
          &larr;
        </button>
        <p className="border border-black px-2 py-1 min-w-8 text-center bg-slate-300">1</p>
        <input
          type="text"
          value={pageNum}
          className="border border-black px-2 py-1 min-w-8 max-w-12 text-center focus:bg-black focus:text-white focus:outline-none"
          onChange={changeHandler}
        />
        <p className="border border-black px-2 py-1 min-w-8 text-center bg-slate-300">{maxPageNum}</p>
        <button
          className="border border-black px-2 py-1 min-w-8 bg-green-400 rounded-md hover:bg-green-600 text-center"
          onClick={incPage}
        >
          &rarr;
        </button>
      </div>
      <div className="absolute top-0 right-2 flex gap-2">
        <label htmlFor="pageSize" className="font-bold">Orders/page</label>
        <select name="pageSize" id="pageSize" onChange={selectionHandler} ref={selectRef} defaultValue={docPerPage || 10} className="border-2 border-blue-500 rounded-md">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}
