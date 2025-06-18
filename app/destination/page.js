"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "../Footer";
import HeaderMenu from "../components/Header";

const destinations = [
  { id: 0, title: "Unakoti Hills", image: "/destination1.jpg" },
  { id: 1, title: "Neermahal Palace", image: "/destination2.jpg" },
  { id: 2, title: "Jampui Hills", image: "/destination3.jpg" },
  { id: 3, title: "Ujjayanta Palace, Agartala", image: "/ujjan.png" },
  { id: 4, title: "Sepahijala Wildlife Sanctuary", image: "/destination4.jpg" },
  { id: 5, title: "Rudrasagar Lake", image: "/destination7.jpg" },
  { id: 6, title: "Tripura Sundari Temple", image: "/destination5.jpeg" },
  { id: 7, title: "Kakrabon", image: "/Kakraban.jpg" },
  { id: 8, title: "Buddha Mandir", image: "/destination9.png" },
  { id: 9, title: "Chabimura", image: "/Chabimura.jpg" },
  { id: 10, title: "Dumboor Lake", image: "/Dumboor-Lake.jpg" },
  { id: 11, title: "Bison National Park", image: "/Bison-National-Park.jpg" },
  { id: 12, title: "Khowai", image: "/Khowai.jpg" },
  { id: 13, title: "Mohanpur", image: "/Mohanpur.jpg" },
];

export default function DestinationsPage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Navbar */}
      <HeaderMenu />

      {/* Header */}
      <div className="px-6 py-12 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Destinations in Tripura
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover cultural landmarks, natural beauty, and hidden gems across Tripura.
        </p>
      </div>

      {/* Grid of Destination Cards */}
      <div className="px-6 pb-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            onClick={() => router.push(`/destinationdetails/${dest.id}`)}
            className="relative h-[400px] rounded-xl overflow-hidden group shadow-lg cursor-pointer"
          >
            <Image
              src={dest.image}
              alt={dest.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300" />

            {/* Text content */}
            <div className="absolute bottom-0 left-0 w-full text-white z-10 p-4">
              <h3 className="text-xl font-bold mb-1">{dest.title}</h3>
              <p className="text-sm max-w-[250px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 ease-in-out">
                Explore the cultural and scenic beauty of {dest.title}.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
