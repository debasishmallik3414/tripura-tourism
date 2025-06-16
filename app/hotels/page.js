'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

// main Hotels page with pagination and search
export default function HotelsPage() {
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);

  // Filter hotels by search query
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(query.toLowerCase()) ||
    hotel.location.toLowerCase().includes(query.toLowerCase()) 
  );

  // Apply pagination
  const visibleHotels = filteredHotels.slice(0, visibleCount);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-100">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">
        Available Hotels
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search hotel by name or location..."
          className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Filter + Hotels List Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filter Section */}
        <aside className="bg-gray-50 p-4 rounded-md shadow-md w-full md:w-1/4">
          <h2 className="text-lg font-semibold">Filters</h2>
          {/* Location Filter */}
          <div className="mb-4">
            <h3 className="font-semibold">Location</h3>
            <ul className="space-y-2">
              {/* This can be implemented to filter further */}
              <li>Agartala</li>
              <li>Rudrasagar</li>
              <li>Jampui Hills</li>
              <li>Dharmanagar</li>
              <li>Udaipur</li>
              <li>Sonamura</li>
            </ul>
          </div>

          {/* Budget Filter */}
          <div>
            <h3 className="font-semibold">Budget per night</h3>
            <ul className="space-y-2">
              <li>₹0 - ₹2,500</li>
              <li>₹2,500 - ₹5,000</li>
              <li>₹5,000 - ₹7,500</li>
              <li>₹7,500 and above</li>
            </ul>
          </div>
        </aside>

        {/* Hotels List Section */}
        <div className="flex-1">
          {/* Hotels List */}
          <div className="flex flex-col gap-6">
           {visibleHotels.map((hotel) => (
  <div
    key={hotel.id}
    className="bg-gray-50 rounded-md p-4 shadow-md transform hover:shadow-lg hover:translate-y-[-5px] transition transform duration-500 flex flex-col sm:flex-row">
    {/* Image Section */}
    <div className="flex-shrink-0 mr-0 sm:mr-4 mb-4 sm:mb-0 w-[250px] h-[160px] relative">
      <Image src={hotel.image} alt={hotel.name} fill className="rounded-md object-cover" />
    </div>

    {/* Text Section */}
    <div className="flex-grow">
      <h2 className="text-2xl font-semibold mb-2">
        {hotel.name}
      </h2>
      <p className="text-gray-500">
        Location: {hotel.location}
      </p>
      <p className="text-gray-500 mt-1">
        Rating: {hotel.rating} ⭐({hotel.reviews} reviews)
      </p>
      <Link
        href={`/details/${hotel.id}`}
        className="inline-block mt-4 px-4 py-2 rounded-md bg-green-700 text-gray-50 hover:bg-green-800 transition">
        View Details
      </Link>
    </div>

    {/* Pricing Section */}
    <div className="flex-grow-0 ml-auto text-right mt-4 sm:mt-0">
      <p className="text-green-700 font-semibold">
        {hotel.price}
      </p>
    </div>
  </div>
))}

</div>
 {/* Loading More Button */}
          {visibleCount < filteredHotels.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 5)}
              className="bg-green-700 text-gray-50 px-4 py-2 rounded-md mt-6">
              Loading more...
            </button>
          )}

          {/* If no hotel found */}
          {filteredHotels.length === 0 && (
            <p className="text-gray-500 mt-6">
              No hotels found matching your search criteria.
            </p>
          )}

        </div>
      </div>

    </div>
  );
}

