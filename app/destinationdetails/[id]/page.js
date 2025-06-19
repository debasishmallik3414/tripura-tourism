'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import Footer from '../../components/Footer';
import HeaderMenu from '../../components/Header';


// Destination data
const destinations = [
  { id: 0, title: "Unakoti Hills", image: "/destination1.jpg", location: [24.1333, 92.1333] },
  { id: 1, title: "Neermahal Palace", image: "/destination2.jpg", location: [23.8361, 91.2828] },
  { id: 2, title: "Jampui Hills", image: "/destination3.jpg", location: [24.1234, 92.1234] },
  { id: 3, title: "Ujjayanta Palace, Agartala", image: "/ujjan.png", location: [23.835, 91.28] },
  { id: 4, title: "Sepahijala Wildlife Sanctuary", image: "/destination4.jpg", location: [23.7500, 91.2500] },
  { id: 5, title: "Rudrasagar Lake", image: "/destination7.jpg", location: [23.7500, 91.2500] },
  { id: 6, title: "Tripura Sundari Temple", image: "/destination5.jpeg", location: [23.7500, 91.2500] },
  { id: 7, title: "Kakrabon", image: "/Kakraban.jpg", location: [23.7500, 91.2500] },
  { id: 8, title: "Buddha Mandir", image: "/destination9.png", location: [23.7500, 91.2500] },
  { id: 9, title: "Chabimura", image: "/Chabimura.jpg", location: [23.7500, 91.2500] },
  { id: 10, title: "Dumboor Lake", image: "/Dumboor-Lake.jpg", location: [23.7500, 91.2500] },
  { id: 11, title: "Bison National Park", image: "/Bison-National-Park.jpg", location: [23.7500, 91.2500] },
  { id: 12, title: "Khowai", image: "/Khowai.jpg", location: [23.7500, 91.2500] },
  { id: 13, title: "Mohanpur", image: "/Mohanpur.jpg", location: [23.7500, 91.2500] },
];

// Hotels array
const hotels = [
  {
    id: 4,
    name: 'Unakoti Tourist Lodge',
    location: [24.1383, 92.1313],
  },
  {
    id: 2,
    name: 'Lake Side Resort Neermahal',
    location: [23.8350, 91.2800],
  },
  {
    id: 3,
    name: 'Eden Tourist Lodge',
    location: [23.8350, 91.2800],
  },
  {
    id: 1,
    name: 'Hotel Polo Towers',
    location: [24.1383, 92.1313],
  },
  {
    id: 7,
    name: 'NOAH SPIRE 5 Star Boutique Hotel',
    location: [24.1383, 92.1313],
  },
  {
    id: 8,
    name: 'Narkel Kunja Resort',
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
      Math.abs(hotel.location[0] - destination.location[0]) <= 0.1 &&
      Math.abs(hotel.location[1] - destination.location[1]) <= 0.1
  );

  return (
    <div className="min-h-screen bg-white">
      <HeaderMenu />

      {/* === ABOUT SECTION === */}
      <section className="pt-24 md:pt-28 grid grid-cols-1 md:grid-cols-2 bg-white min-h-[80vh]">
        {/* Left: Image */}
        <div className="w-full h-96 md:h-auto">
          <Image
            src={destination.image}
            alt={destination.title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-center px-8 py-10 bg-gradient-to-br from-[#f9f9f9] to-white">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">A Beautiful Destination</h2>
          <p className="text-lg text-gray-500 mb-6">Explore the wonders of {destination.title}</p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Discover a unique combination of heritage, nature, and culture in {destination.title}.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl">❤️</span>
              <p className="text-gray-700 text-base">Breathtaking views and peaceful surroundings await you.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl">🏞️</span>
              <p className="text-gray-700 text-base">Perfect mix of culture, nature and adventure.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✨</span>
              <p className="text-gray-700 text-base">Enjoy spiritual calm and historical wonders.</p>
            </li>
          </ul>
        </div>
      </section>

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
                <div className="w-full md:w-1/2 h-60 md:h-auto">
                  <Image
                    src={`/hotel${hotel.id}.jpg`}
                    alt={hotel.name}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
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
            <p className="text-center col-span-full text-gray-500">No related hotels found nearby.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetails;
