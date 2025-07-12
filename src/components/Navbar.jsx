"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navbarList = [
  { name: "Home", href: "/" },
  { name: "Anime", href: "/anime" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-800 text-white p-8 flex justify-between items-center ">
      <h1 className="">Rivnime</h1>
      <ul className="flex space-x-4">
        {navbarList.map((item) => (
          <li
            key={item.name}
            className={`hover:underline ${
              pathname === item.href ? "text-yellow-500 underline" : ""
            }`}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
