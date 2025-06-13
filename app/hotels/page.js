'use client';

import Image from 'next/image';
import Link from 'next/link';

const hotels = [
  {
    id: 1,
   name: "Hotel polo towers.",
    image: "/hotel1.jpg",
    location: "Agartala",
    price: "₹7,999/night",
  },
  {
    id: 2,
    name: "Lake Side Resort Neermahal",
    image: "/hotel2.jpg",
    location: "Rudrasagar",
    price: "₹3,499/night"
  },
  {
    id: 3,
    name: "Eden Tourist Lodge",
    image: "/hotel3.png",
    location: "Jampui Hills",
    price: "₹2,499/night",
  },
];

export default function HotelsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-green-100 to-white">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">Available Hotels</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-56">
              <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-green-700">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="text-green-600 mt-2 font-semibold">₹{hotel.price} / night</p>
              <Link
                href={`/book/${hotel.id}`}
                className="block mt-4 text-center bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
