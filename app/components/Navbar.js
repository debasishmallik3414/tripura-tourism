'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <nav className="flex items-center backdrop-blur-xs justify-between bg-gradient-to-b from-green-50 via-white shadow-md px-4 py-2 sticky top-0 z-50 flex-wrap">
      <div className="flex items-center gap-2">
        <Image
          src="/tripura-logo1.png"
          alt="Logo"
          className="cursor-pointer"
          onClick={() => window.location.reload()}
          width={60}
          height={60}
        />
      </div>

      <ul className="hidden md:flex gap-4 text-sm font-semibold">
        <li><a href="#home" onClick={() => window.location.reload()} className="hover:text-green-600">Home</a></li>
        <li><a href="#features" className="hover:text-green-600">Features</a></li>
        <li><a href="#top-destination" className="hover:text-green-600">Place</a></li>
        <li><a href="#about" className="hover:text-green-600">About</a></li>
        <li><a href="#contact" className="hover:text-green-600">Contact Us</a></li>
      </ul>

      <div className="md:hidden">
        <details className="relative">
          <summary className="cursor-pointer font-semibold">Menu</summary>
          <ul className="absolute right-0 bg-white shadow-md rounded-md p-3 mt-2 text-sm space-y-2 w-40 z-50">
            <li><a href="#home" onClick={() => window.location.reload()} className="block hover:text-yellow-600">Home</a></li>
            <li><a href="#features" className="block hover:text-yellow-600">Features</a></li>
            <li><a href="#top-destinations" className="block hover:text-yellow-600">Place</a></li>
            <li><a href="#gallery" className="block hover:text-yellow-600">About</a></li>
            <li><a href="#contact" className="block hover:text-yellow-600">Contact Us</a></li>
          </ul>
        </details>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto mt-4 md:mt-0">
        <form onSubmit={handleSearch} className="flex w-full max-w-xs">
          <input
            aria-label='Search'
            type='text'
            placeholder='Search...'
            className='flex-1 px-3 py-1 rounded-l-md border border-gray-400'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type='submit'
            aria-label='Go'
            className='bg-green-600 text-gray-50 font-semibold px-4 py-1 rounded-r-md hover:bg-green-700 transition'
          >
            Go
          </button>
        </form>

        <Link
          href="/signup"
          className="inline-flex items-center justify-between bg-green-600 text-gray-50 px-6 py-1.5 rounded-full font-semibold hover:bg-green-800 transition whitespace-nowrap sm:text-base text-sm"
        >
          <span>SIGN UP</span>
          <span className="ml-2 bg-gray-50 text-gray-900 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </nav>
  )
}
