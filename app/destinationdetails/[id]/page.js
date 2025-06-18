'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import Footer from '../../components/Footer';
import HeaderMenu from '../../components/Header';

// Dummy data – replace with your real data source
const destinations = [
  {
    id: 0,
    title: 'Unakoti Hills',
    image: '/destination1.jpg',
    location: [24.1333, 92.1333],
    description: `Unakoti is an ancient Shaivite pilgrimage site located in Tripura, India, known for its rock-cut carvings and sculptures...`, // extend description
  },
  {
    id: 1,
    title: 'Neermahal Palace',
    image: '/destination2.jpg',
    location: [23.8361, 91.2828],
    description: `Neermahal, or "Water Palace," is a magnificent royal palace built in the middle of Rudrasagar Lake...`,
  },
];

const hotels = [
  {
    id: 1,
    name: 'Hotel Polo Towers',
    location: [24.1383, 92.1313],
  },
  {
    id: 2,
    name: 'Lake Side Resort Neermahal',
    location: [23.8350, 91.2800],
  },
];

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id === Number(id));

  if (!destination) {
    return <p className="text-center py-20">Destination not found.</p>;
  }

  const relatedHotels = hotels.filter(
    (hotel) =>
      Math.abs(hotel.location[0] - destination.location[0]) <= 1 &&
      Math.abs(hotel.location[1] - destination.location[1]) <= 1
  );

  return (
    <div className="min-h-screen bg-white">
      <HeaderMenu />
      {/* === ABOUT SECTION === */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] bg-[#f2f2f2]">
        {/* Text */}
        <div className="flex flex-col justify-center px-8 py-10 relative">
          <h2 className="text-4xl font-bold mb-4 font-serif">ABOUT</h2>
          <p className="text-gray-700 mb-4">{destination.description.slice(0, 400)}...</p>
          <p className="text-gray-700 mb-4">{destination.description.slice(401, 700)}...</p>

          <Link href={`/booking/${destination.id}`}>
            <button className="border border-black px-6 py-2 text-black font-semibold hover:bg-black hover:text-white transition w-fit mt-4">
              BOOK NOW
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full h-full">
          <Image
            src={destination.image}
            alt={destination.title}
            width={1000}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* === RELATED HOTELS SECTION === */}
<div className="px-6 py-14 bg-[#f2f2f2]">
  <h2 className="text-3xl font-bold mb-10 text-center font-serif">Related Hotels</h2>

  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    {relatedHotels.length > 0 ? (
      relatedHotels.map((hotel) => (
        <div
          key={hotel.id}
          className="flex flex-col md:flex-row bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          {/* Hotel Image */}
          <div className="w-full md:w-1/2 h-60 md:h-auto">
            <Image
              src={`/hotel${hotel.id}.jpg`} // make sure these images exist in public folder
              alt={hotel.name}
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Hotel Info */}
          <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
            <div>
              <h3 className="text-xl font-bold mb-2 font-serif">{hotel.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                📍 Latitude: {hotel.location[0]} <br />
                📍 Longitude: {hotel.location[1]}
              </p>
            </div>

            <Link
              href={`/details/${hotel.id}`}
              className="mt-2 inline-block text-sm font-medium border border-gray-900 text-gray-900 px-4 py-2 rounded hover:bg-black hover:text-white transition w-fit"
            >
              View Details
            </Link>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center col-span-full text-gray-500">No related hotels found</p>
    )}
  </div>
</div>
      <Footer />
    </div>
  );
};

export default DestinationDetails;
