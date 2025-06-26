'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../Footer';
import HeaderMenu from '../components/Header';
import Loader from '../components/loader';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const hotels = [
  {
    id: 1,
    name: "Hotel Polo Towers.",
    image: "/hotel1.jpg",
    location: "Agartala",
    price: "₹7,999/night",
    rating: 4.5,
    reviews: 250,
  },
  {
    id: 2,
    name: "Lake Side Resort Neermahal",
    image: "/hotel2.jpg",
    location: "Rudrasagar",
    price: "₹3,499/night",
    rating: 4.0,
    reviews: 150,
  },
  {
    id: 3,
    name: "Eden Tourist Lodge",
    image: "/hotel3.png",
    location: "Jampui Hills",
    price: "₹2,499/night",
    rating: 4.2,
    reviews: 100,
  },
  {
    id: 4,
    name: "Unakoti Tourist Lodge",
    image: "/hotel4.jpg",
    location: "Unakoti",
    price: "₹1,999/night",
    rating: 4.3,
    reviews: 120,
  },
  {
    id: 5,
    name: "Hotel Royal Inn",
    image: "/hotel5.jpg",
    location: "Udaipur",
    price: "₹2,799/night",
    rating: 4.1,
    reviews: 90,
  },
  {
    id: 6,
    name: "The Imperial Hotel",
    image: "/hotel10.jpeg",
    location: "Udaipur",
    price: "₹2,199/night",
    rating: 4.0,
    reviews: 60,
  },
  {
    id: 7,
    name: "NOAH SPIRE 5 Star Boutique Hotel",
    image: "/hotel11.jpg",
    location: "Agartala",
    price: "₹4,999/night",
    rating: 4.4,
    reviews: 200,
  },
  {
    id: 8,
    name: "Narkel Kunja Resort",
    image: "/hotel12.png",
    location: "Domboor Lake",
    price: "₹2,999/night",
    rating: 4.2,
    reviews: 80,
  },
];

export default function HotelsPage() {
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleLearnMore = (id) => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push(`/details/${id}`);
    }, 1000);
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(query.toLowerCase()) ||
    hotel.location.toLowerCase().includes(query.toLowerCase())
  );

  const visibleHotels = filteredHotels.slice(0, visibleCount);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderMenu />

      <main className="flex-grow pt-24 pb-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Available Hotels</h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <select
            className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-auto"
            onChange={(e) => {
              const sortType = e.target.value;
              if (sortType === "price-low") {
                hotels.sort((a, b) => parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, '')));
              } else if (sortType === "price-high") {
                hotels.sort((a, b) => parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, '')));
              }
              setVisibleCount(4);
            }}
          >
            <option value="">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          <input
            type="text"
            placeholder="Search hotel by name or location..."
            className="w-full md:w-1/4 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <aside className="bg-white p-4 rounded-md shadow-md w-full md:w-[20%]">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Location</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>Agartala</li>
                <li>Rudrasagar</li>
                <li>Jampui Hills</li>
                <li>Unakoti</li>
                <li>Udaipur</li>
                <li>Domboor Lake</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Budget per night</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>₹0 - ₹2,500</li>
                <li>₹2,500 - ₹5,000</li>
                <li>₹5,000 - ₹7,500</li>
                <li>₹7,500 and above</li>
              </ul>
            </div>
          </aside>

          <div className="flex-1 flex flex-col gap-8">
            {(loading || isNavigating)
              ? [...Array(visibleCount)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 flex flex-col md:flex-row relative"
                  >
                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-between z-10">
                      <div>
                        <h3 className="text-3xl font-serif font-semibold text-gray-800 mb-3">
                          <Skeleton width={220} />
                        </h3>
                        <div className="flex items-center gap-4 text-green-700 mb-3 text-sm">
                          <Skeleton width={80} />
                          <Skeleton width={50} />
                          <Skeleton width={50} />
                        </div>
                        <p className="text-green-700 text-sm font-semibold mb-2">
                          <Skeleton width={150} />
                        </p>
                        <p className="text-gray-600 mb-4">
                          <Skeleton width={200} />
                        </p>
                        <p className="text-gray-500 mb-5">
                          <Skeleton count={2} />
                        </p>
                      </div>
                      <Skeleton height={36} width={120} />
                    </div>
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                      <Skeleton height="100%" />
                    </div>
                  </div>
                ))
              : visibleHotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 flex flex-col md:flex-row relative"
                  >
                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-between z-10">
                      <div>
                        <h3 className="text-3xl font-serif font-semibold text-gray-800 mb-3">{hotel.name}</h3>
                        <div className="flex items-center gap-4 text-green-700 mb-3 text-sm">
                          <span>📏 30m²</span>
                          <span>👤 2</span>
                          <span>🛏 1</span>
                        </div>
                        <p className="text-green-700 text-sm font-semibold mb-2">
                          Price starting at <span className="text-base">{hotel.price}</span>
                        </p>
                        <p className="text-gray-600 mb-4">
                          Location: {hotel.location} | {hotel.rating}⭐ ({hotel.reviews} reviews)
                        </p>
                        <p className="text-gray-500 mb-5">
                          Features a lavish queen-size bed with aesthetic decor.
                        </p>
                      </div>
                      <button
                        onClick={() => handleLearnMore(hotel.id)}
                        className="inline-block border border-green-700 text-green-700 px-5 py-2 text-sm font-medium rounded hover:bg-green-700 hover:text-white transition"
                      >
                        Learn More
                      </button>
                    </div>
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}

            {visibleCount < filteredHotels.length && !(loading || isNavigating) && (
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="relative px-6 py-3 font-medium text-white group bg-green-700 rounded-md w-fit self-center mt-6 hover:bg-green-800 transition"
              >
                <span className="absolute left-0 top-0 w-full h-full rounded-md bg-green-800 opacity-0 group-hover:opacity-100 transition"></span>
                <span className="relative z-10">+ Load More</span>
              </button>
            )}

            {!loading && filteredHotels.length === 0 && (
              <p className="text-gray-500 mt-6">
                No hotels found matching your search criteria.
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
 