"use client";

import React from "react";
import Link from "next/link";

const TopHotelDeals = () => {
  return (
    <section id="top-deals" className="py-12 px-4 bg-green-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        Top Hotel Deals
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Discover the best places to stay in Tripura with unbeatable prices
      </p>

      <div className="max-w-6xl mx-auto grid gap-6">
        {/* First Row - 2 hotels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              image: "/hotel1.jpg",
              name: "Hotel Polo Towers.",
              location: "Agartala",
              price: "₹7,999/night",
              id: 1,
            },
            {
              image: "/hotel2.jpg",
              name: "Lake Side Resort Neermahal",
              location: "Rudrasagar",
              price: "₹3,499/night",
              id: 2,
            },
          ].map((hotel, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {hotel.location}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <h3 className="text-white text-lg font-semibold">
                  {hotel.name}
                </h3>
                <p className="text-green-200 font-bold">{hotel.price}</p>
                <Link
                  href={`/details/${hotel.id}`}
                  className="inline-block mt-2 bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100 text-sm font-medium"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 hotels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              image: "/hotel3.png",
              name: "Eden Tourist Lodge",
              location: "Jampui Hills",
              price: "₹2,499/night",
              id: 3,
            },
            {
              image: "/hotel4.jpg",
              name: "Unakoti Tourist Lodge",
              location: "Unakoti",
              price: "₹1,999/night",
              id: 4,
            },
            {
              image: "/hotel5.jpg",
              name: "Hotel Royal Inn",
              location: "Udaipur",
              price: "₹2,799/night",
              id: 5,
            },
          ].map((hotel, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {hotel.location}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <h3 className="text-white text-lg font-semibold">
                  {hotel.name}
                </h3>
                <p className="text-green-200 font-bold">{hotel.price}</p>
                <Link
                  href={`/details/${hotel.id}`}
                  className="inline-block mt-2 bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100 text-sm font-medium"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      {/* <div className="flex justify-end mt-8 max-w-6xl mx-auto px-2">
        <Link
          href="/hotels"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          View All →
        </Link>
      </div> */}
     <div className="flex justify-end mt-8 max-w-6xl mx-auto px-2">
  <Link
    href="/hotels"
    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300 group"
  >
    <span>Explore Hotels</span>
    <svg
      className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </Link>
</div>

    </section>
  );
};

export default TopHotelDeals;
