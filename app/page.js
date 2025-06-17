"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";
import Footer from "./components/Footer";
import NaviagationMenu from "./components/Navbar";
import PopularDestinations from "./components/TopDestination";
import TopHotelDeals from "./components/Hotel";
import FeatureSection from "./components/Features";
import dynamic from "next/dynamic";
import TripuraTourismPage from "./components/CTXSection";

const TripuraMap = dynamic(() => import("./components/TripuraMap"), {
  ssr: false,
});

<Head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-papVrE8MvGJ3xz5Y2zZq9WvppcXh3MPaU5OJo0u+9MB2UOqzKVXXRJhiDyId7XhT8JoqhQkxCJBeU8HZGfSeUg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
</Head>;
export default function Home() {
  const [query, setQuery] = useState("");
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
      <NaviagationMenu />
      {/* Top Destinations */}
      <PopularDestinations />
      {/* topdeals-hotels */}
      <TopHotelDeals />
      {/* features */}
      <FeatureSection />
      <TripuraTourismPage />
      {/* Contact */}
      <section id="contact" className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Get in Touch
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left - Map */}
          <TripuraMap />

          {/* Right - Contact Form */}
          <form
            id="contact"
            className="w-full space-y-4 bg-white p-6 rounded-lg shadow-md"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
