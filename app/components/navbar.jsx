import Link from "next/Link";

export default function Navbar() {
  return (
    <nav className="bg-[#262626] text-white sticky top-0 print:hidden">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/estimate">Create Estimate</Link>
        </li>
        <li>
          <Link href="/orderList">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}
