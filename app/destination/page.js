'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const destinations = [
  { title: 'Unakoti Hills', image: '/destination1.jpg' },
  { title: 'Neermahal Palace', image: '/destination2.jpg' },
  { title: 'Jampui Hills', image: '/destination3.jpg' },
  { title: 'Sepahijala Wildlife Sanctuary', image: '/destination4.jpg' },
  { title: 'Tripura Sundari Temple', image: '/destination5.jpeg' },
  { title: 'Chabimura Rock Carvings', image: '/destination6.jpg' },
  { title: 'Ujjayanta Palace', image: '/destination7.jpg' },
  { title: 'Dumboor Lake', image: '/destination8.jpg' },
  { title: 'Mahamuni Buddha Mandir', image: '/destination9.png' },
  { title: 'Gunavati Group of Temples', image: '/destination10.jpg' },
  { title: 'Mekhlipara Tea Estate', image: '/destination11.jpg' },
  { title: 'Rudrasagar Lake', image: '/destination12.jpg' },
  { title: 'Kamaleswari Temple', image: '/destination13.jpg' },
];

// DestinationsPage with revamped Navbar
export default function DestinationsPage() {
    const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };
  
  return (
   <div className="font-sans text-gray-800 scroll-smooth bg-gradient-to-b from-green-50 via-white to-green-100 ">
      {/* Navbar */}
      <nav className="flex items-center backdrop-blur-xs justify-between bg-gradient-to-b from-green-50 via-white 
       shadow-md px-4 py-2 sticky top-0 z-50 flex-wrap">
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

        <ul className="hidden md:flex gap-4 text-sm font-medium">
          <li><a href="#home" onClick={() => window.location.reload()} className="hover:text-green-600">Home</a></li>
          <li><a href="#top-deals" className="hover:text-green-600">Services</a></li>
          <li><a href="#top-destination" className="hover:text-green-600">Place</a></li>
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#contact" className="hover:text-green-600">Contact Us</a></li>
        </ul>

        <div className="md:hidden">
          <details className="relative">
            <summary className="cursor-pointer font-semibold">Menu</summary>
            <ul className="absolute right-0 bg-white shadow-md rounded-md p-3 mt-2 text-sm space-y-2 w-40 z-50">
              <li><a href="#home" onClick={() => window.location.reload()} className="block hover:text-yellow-600">Home</a></li>
              <li><a href="#services" className="block hover:text-yellow-600">Services</a></li>
              <li><a href="#top-destinations" className="block hover:text-yellow-600">Place</a></li>
              <li><a href="#gallery" className="block hover:text-yellow-600">About</a></li>
              <li><a href="#contact" className="block hover:text-yellow-600">Contact Us</a></li>
            </ul>
          </details>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto mt-4 md:mt-0">
          <form onSubmit={handleSearch} className="flex w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-1 rounded-l-md border border-gray-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="bg-green-600 text-white font-bold px-3 py-1 rounded-r-md">Go</button>
          </form>
          <Link
  href="/signup"
  className="inline-flex items-center justify-between bg-green-600 text-white px-6 py-1.5 rounded-full font-medium hover:bg-green-800 transition whitespace-nowrap sm:text-base text-sm"
>
  <span className="tracking-wide">SIGN UP</span>
  <span className="ml-2 bg-white text-gray-700 rounded-full p-1">
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

      {/* Main content */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 text-center mb-12">
          All Destinations in Tripura
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-xl shadow-md overflow-hidden transform hover:shadow-2xl hover:-translate-y-1 transition">
              <Image
                src={dest.image}
                alt={dest.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {dest.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                    Experience the beauty and culture of {dest.title}. 
                </p>
                <Link
                    href={`/destinations/${index}`}
                    className="inline-block mt-4 px-4 py-2 rounded-md bg-green-600 text-gray-900 font-semibold shadow-md hover:bg-green-800 transform hover:shadow-lg hover:-translate-y-1 transition">
                    View More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-black-600 hover:text-green-800 underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

