"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import HeaderMenu from "./Header";

export default function NavbarHero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div
      className="relative h-[90vh] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/banner6.jpg')" }}
    >
      {/* Nav */}
      <HeaderMenu />
      {/* Hero Content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
          <span className="text-yellow-400">UP TO 60% OFF</span> ADVENTURE
          TRAVEL
        </h1>
        <p className="text-gray-200 text-md md:text-lg font-medium mb-6">
          Join over 40,000 members. Get exclusive access to members-only deals.
        </p>

        {/* Search/Subscribe Box */}
        <form
          onSubmit={handleSearch}
          className="flex w-full max-w-xl rounded-full overflow-hidden bg-white shadow-lg"
        >
          <input
            type="text"
            placeholder="Search or enter your email"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-bold px-6 py-3 hover:bg-orange-600 transition"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}
