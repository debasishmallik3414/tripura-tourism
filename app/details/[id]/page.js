'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const hotels = [
  {
    id: 1,
    name: 'Hotel Polo Towers',
    location: 'Agartala',
    rating: 4.5,
    reviews: 245,
    price: '₹7,999/night',
    images: ['/hotel1.jpg', '/hotel2.jpg', '/hotel3.png'],
    description: 'Hotel Polo Towers Agartala is a luxury stay with top amenities. Perfect for business and leisure.',
    facilities: ['Free WiFi', 'Swimming Pool', 'Restaurant', 'Spa', 'Parking'],
  },
  {
    id: 2,
    name: 'Lake Side Resort Neermahal',
    location: 'Rudrasagar',
    rating: 4.7,
    reviews: 180,
    price: '₹6,499/night',
    images: ['/hotel2.jpg'],
    description: 'Enjoy a serene lakeside experience at this charming resort overlooking Neermahal.',
    facilities: ['Boating', 'Lake View', 'Restaurant', 'Parking'],
  },
  {
    id: 3,
    name: 'Royal Heritage Palace',
    location: 'Ujjayanta Palace',
    rating: 4.2,
    reviews: 98,
    price: '₹5,899/night',
    images: ['/hotel3.jpg'],
    description: 'Stay like royalty at this heritage-themed hotel near Ujjayanta Palace.',
    facilities: ['AC Rooms', 'Free Breakfast', 'Tour Guide', 'WiFi'],
  },
  {
    id: 4,
    name: 'Eco Retreat Jampui Hills',
    location: 'Jampui Hills',
    rating: 4.9,
    reviews: 112,
    price: '₹8,199/night',
    images: ['/hotel4.jpg'],
    description: 'Escape to the lush greenery of Jampui Hills with this eco-friendly retreat.',
    facilities: ['Hiking', 'Organic Food', 'Mountain View', 'Campfire'],
  },
];

const comments = [
  { id: 1, hotelId: 1, author: 'Debasish', text: 'Excellent hotel!', rating: 5 },
  { id: 2, hotelId: 1, author: 'Kunal', text: 'Comfortable and well-equipped.', rating: 4 },
];

export default function HotelDetailsPage() {
  const { id } = useParams();
  const hotelId = Number(id);
  const hotel = hotels.find((item) => item.id === hotelId);
  const hotelComments = comments.filter((item) => item.hotelId === hotelId);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const [currentCommentPage, setCurrentCommentPage] = useState(1);
  const commentsPerPage = 5;
  const totalCommentPages = Math.ceil(hotelComments.length / commentsPerPage);
  const displayedComments = hotelComments.slice(
    (currentCommentPage - 1) * commentsPerPage,
    currentCommentPage * commentsPerPage
  );

  const related = hotels.filter((item) => item.location === hotel?.location && item.id !== hotelId);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;
  const totalPages = Math.ceil(related.length / perPage);
  const displayed = related.slice((currentPage - 1) * perPage, currentPage * perPage);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some((item) => item.id === hotelId));
  }, [hotelId]);

  const handleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      favorites = favorites.filter((item) => item.id !== hotelId);
    } else {
      favorites.push(hotel);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite((prev) => !prev);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (name && date) {
      setBookingSuccess(true);
      setName('');
      setDate('');
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    alert('Comment submitted!');
    setNewComment('');
    setNewRating(5);
  };

  if (!hotel) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">{hotel.name}</h1>

        {/* Swiper Slider */}
        <div className="relative">
          <button id="custom-prev" className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button id="custom-next" className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            navigation={{ prevEl: '#custom-prev', nextEl: '#custom-next' }}
            autoplay={{ delay: 3000 }}
            className="rounded-xl overflow-hidden"
          >
            {hotel.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <Image src={img} alt={`${hotel.name} ${idx}`} width={1200} height={600} className="w-full object-cover h-[500px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Booking Form & Info */}
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="md:col-span-1 bg-gray-100 p-6 rounded-xl shadow-md relative">
            {bookingSuccess ? (
              <div className="text-green-700 text-center font-semibold text-xl">
                ✅ Thank you for your reservation!
              </div>
            ) : (
              <form onSubmit={handleBooking} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold mb-2">Book a Room</h2>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded border" placeholder="Your Name" required />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 rounded border" required />
                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Book Now</button>
              </form>
            )}
            <button onClick={handleFavorite} className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              {isFavorite ? '❤️ In Favorites' : 'Save to Favorites'}
            </button>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">About</h3>
              <p className="mb-4">{hotel.description}</p>
              <h4 className="font-semibold mb-2">Facilities</h4>
              <ul className="grid grid-cols-2 gap-2">
                {hotel.facilities.map((item, idx) => (
                  <li key={idx} className="before:content-['✔️'] before:mr-2">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Reviews</h3>
              <p>Average Rating: {hotel.rating} ⭐ ({hotel.reviews} reviews)</p>
              <ul className="mt-4 space-y-2">
                {displayedComments.map((item) => (
                  <li key={item.id} className="border p-2 rounded bg-white">{item.author}: {item.text} — {item.rating} ⭐</li>
                ))}
              </ul>
              <div className="flex gap-2 mt-4">
                {Array.from({ length: totalCommentPages }, (_, i) => i + 1).map((page) => (
                  <button key={page} onClick={() => setCurrentCommentPage(page)} disabled={currentCommentPage === page}
                    className={`px-3 py-1 rounded border ${currentCommentPage === page ? 'bg-gray-700 text-white' : 'bg-white'}`}>
                    {page}
                  </button>
                ))}
              </div>

              <form onSubmit={handleAddComment} className="mt-6 flex flex-col gap-4">
                <input type="text" placeholder="Write a comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} required className="p-2 border rounded" />
                <select value={newRating} onChange={(e) => setNewRating(Number(e.target.value))} className="p-2 border rounded">
                  {[5, 4, 3, 2, 1].map((val) => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                </select>
                <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Submit Comment</button>
              </form>
            </div>
          </div>
        </div>

        {/* Related Hotels */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6">Related Hotels</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayed.map((item) => (
              <Link key={item.id} href={`/details/${item.id}`} className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
                <Image src={item.images[0]} alt={item.name} width={400} height={200} className="w-full h-48 object-cover rounded-lg mb-3" />
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.location}</p>
                <p className="text-sm">{item.rating} ⭐</p>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} onClick={() => setCurrentPage(page)} disabled={currentPage === page}
                className={`px-3 py-1 rounded border ${currentPage === page ? 'bg-gray-700 text-white' : 'bg-white'}`}>
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
