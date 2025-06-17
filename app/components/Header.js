"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`${
        isHome ? "" : "bg-gray-900"
      } absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20`}
    >
      <Image
        src="/tripura-logo1.png"
        alt="Logo"
        width={60}
        height={60}
        className="cursor-pointer"
      />
      <ul className="hidden md:flex gap-6 text-white font-semibold">
        <li>
          <a href="#home" className="hover:text-yellow-400">
            Home
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-yellow-400">
            Features
          </a>
        </li>
        <li>
          <a href="#top-destination" className="hover:text-yellow-400">
            Place
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </li>
      </ul>
      <Link
        href="/signup"
        className="bg-white text-green-700 font-semibold px-4 py-2 rounded-full hover:bg-yellow-400 transition"
      >
        Sign Up
      </Link>
    </nav>
  );
};

export default HeaderMenu;
