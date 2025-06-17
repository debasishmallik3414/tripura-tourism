'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const destinations = [
  { id: 0, title: 'Unakoti Hills', image: '/destination1.jpg' },
  { id: 1, title: 'Neermahal Palace', image: '/destination2.jpg' },
  { id: 2, title: 'Jampui Hills', image: '/destination3.jpg' },
  // { id: 3, title: 'Udaipur Lake', image: '/destination4.jpg' },
  { id: 3, title: 'Ujjayanta Palace, Agartala', image: '/ujjan.png' },
  { id: 4, title: 'Sepahijala Wildlife Sanctuary', image: '/destination4.jpg' },
  { id: 5, title: 'Rudrasagar Lake', image: '/destination7.jpg' },
  { id: 6, title: 'Tripura Sundari Temple', image: '/destination5.jpeg' },
  { id: 7, title: 'Kakrabon', image: '/Kakraban.jpg' },
  { id: 8, title: 'Buddha Mandir', image: '/destination9.png' },
  { id: 9, title: 'Chabimura', image: '/Chabimura.jpg' },
  { id: 10, title: 'Dumboor Lake', image: '/Dumboor-Lake.jpg' },
  { id: 11, title: 'Bison National Park', image: '/Bison-National-Park.jpg' },
  { id: 12, title: 'Khowai', image: '/Khowai.jpg' },
  { id: 13, title: 'Mohanpur', image: '/Mohanpur.jpg' },
  //...
  // rest of your array
];

// Destinations List
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
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      {/* (...same as you already have...) */}

      {/* Main content */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 text-center mb-12">
          All Destinations in Tripura
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-green-100 rounded-xl shadow-md overflow-hidden transform hover:shadow-2xl hover:-translate-y-1 transition">
              <Image src={dest.image} alt={dest.title} width={600} height={400} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {dest.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                    Experience the beauty and culture of {dest.title}. 
                </p>

                {/* Link to Detail */}
                <Link
                    href={`/destinationdetails/${dest.id}`}
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
            className="text-gray-600 hover:text-gray-900 underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

