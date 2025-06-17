"use client";

import Image from "next/image";
import React from "react";

const destinationsRow1 = [
  { keyword: "Explore", place: "AUSTRALIA", image: "/destination1.jpg" },
  { keyword: "Uncover", place: "INDIA", image: "/destination2.jpg" },
  { keyword: "Discover", place: "PERU", image: "/destination3.jpg" },
  { keyword: "Paradise", place: "BALI", image: "/destination4.jpg" },
  { keyword: "Adventure", place: "HAWAII", image: "/destination5.jpeg" },
];

const PopularDestinations = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Popular Destinations
      </h2>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Row 1: Two Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {destinationsRow1.map((item, i) => (
            <div
              key={i}
              className="relative min-h-80 [&:nth-child(2)]:col-span-4 [&:nth-child(2)]:row-span-2 rounded-2xl col-span-4 first:col-span-8 first:row-span-2 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.place}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-3xl font-[DancingScript] drop-shadow-lg">
                  {item.keyword}
                </h3>
                <p className="text-lg font-bold tracking-widest drop-shadow-md">
                  {item.place}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
