"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "../components/loader";
import AOS from 'aos';
import 'aos/dist/aos.css';

const destinationsRow1 = [
  { keyword: "Heritage", place: "UNOKOTI", image: "/destination1.jpg" },
  { keyword: "Royal Retreat", place: "NEERMAHAL", image: "/destination2.jpg" },
  { keyword: "Scenic Views", place: "JUMPAI HILLS", image: "/jumpaihills1.png" },
  { keyword: "Wildlife", place: "SEPAHIJALA WILDLIFE SANCTUARY & ZOO", image: "/destination4.jpg" },
  { keyword: "Spiritual", place: "TRIPURA SUNDARI TEMPLE", image: "/destination5.jpeg" },
];

const PopularDestinations = () => {
  const [loading, setLoading] = useState(false); // Only loader on route
  const router = useRouter();

  const handleViewAllClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/destination");
    }, 1000); // Optional delay for loader effect
  };
useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  if (loading) return <Loader />;

  return (
    <section id='TopDestination' data-aos="fade-up"className="py-12 px-4 bg-gray-100 min-h-screen scroll-mt-28">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10" data-aos="fade-down">
        Popular Destinations
      </h2>

      <div className="max-w-7xl mx-auto space-y-8">
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

          {/* CTA Button with route-loader */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex justify-end items-center">
            <button
              onClick={handleViewAllClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition duration-300"
            >
              <span className="font-medium">View All</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
