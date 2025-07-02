"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderMenu from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import AOS from "aos";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "aos/dist/aos.css";

const slides = [
  "/banner6.jpg",
  "/banner7.jpg",
  "/banner8.jpg",
  "/banner9.jpg",
  "/banner10.jpg",
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
  "/banner4.jpg",
  "/banner5.jpg",
];

export default function NavbarHero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    "Uncover Tripura’s best-kept secrets...",
    "Where to next in Tripura?",
    "Search ancient wonders or modern comforts...",
    "Discover places that inspire...",
    "Type a destination or dream stay...",
    "Discover places that inspire...",
    "Uncover Tripura’s best-kept secrets...",
    "Search ancient wonders or modern comforts...",
    "Find your perfect spot in Tripura..."
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="absolute inset-0 h-full w-full z-0"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 z-10">
        <div className="w-full">
          <HeaderMenu />
        </div>

        <div className="flex flex-col items-center justify-center h-[80%] text-center px-4">
          <h1
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-2"
          >
            <span className="text-yellow-400">EXPLORE THE BEAUTY</span> OF TRIPURA
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-200 text-md md:text-lg font-medium mb-6"
          >
            Discover hidden gems, ancient heritage, and breathtaking landscapes across Tripura.
          </p>

          <form
            onSubmit={handleSearch}
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex w-full max-w-xl rounded-full overflow-hidden bg-white shadow-lg"
          >
            <input
              type="text"
              placeholder={placeholders[placeholderIndex]}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold px-6 py-3 hover:bg-orange-600 transition"
            >
              Explore
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
