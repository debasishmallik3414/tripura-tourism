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
import ContactSection from "./components/contact";

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
      <ContactSection/>
      {/* Contact */}
      <Footer />
    </div>
  );
}
