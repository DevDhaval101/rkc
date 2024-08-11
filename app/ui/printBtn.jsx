'use client'

export default function PrintBtn() {
  return (
    <button
      className="font-bold text-xl md:text-xl px-2 py-1 rounded-md bg-sky-500 print:hidden"
      onClick={() => window.print()}
    >
      Print
    </button>
  );
}
