"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const hotels = [
  {
    id: 1,
    name: "Hotel Polo Towers",
    images: [
      "/hotel1.jpg",
      "/polo2.jpg",
      "/polo3.jpg",
      "/polo4.jpg",
      "/polo5.jpg",
    ],
    location: "Agartala",
    price: "₹7,999/night",
    rating: 4.5,
    reviews: 250,
    description: "Comfortable hotel in Agartala with all modern facilities.",
    facilities: [
      "Free WiFi",
      "Fitness Center",
      "Swimming Pool",
      "Restaurant",
      "Business Center",
    ],
  },
  {
    id: 2,
    name: "Lake Side Resort Neermahal",
    images: [
      "/hotel2.jpg",
      "/neermahal2.jpg",
      "/neermahal3.jpg",
      "/neermahal4.jpg",
    ],
    location: "Rudrasagar",
    price: "₹3,499/night",
    rating: 4.0,
    reviews: 150,
    description: "Beautiful lakeside resort with stunning views.",
    facilities: [
      "Free Parking",
      "Restaurant",
      "Bar",
      "Room Service",
      "24/7 Reception",
    ],
  },
  {
    id: 3,
    name: "Eden Tourist Lodge",
    images: ["/hotel3.png", "/eden2.jpg", "/eden3.jpg", "/eden4.png"],
    location: "Jampui Hills",
    price: "₹2,499/night",
    rating: 4.2,
    reviews: 100,
    description: "A serene lodge in the hills, perfect for nature lovers.",
    facilities: [
      "Free WiFi",
      "Restaurant",
      "Garden",
      "Hiking Trails",
      "24/7 Reception",
    ],
  },
  {
    id: 4,
    name: "Unakoti Tourist Lodge",
    images: ["/hotel4.jpg", "/hotel4.jpg", "/hotel4.jpg", "/hotel4.jpg"],
    location: "Unakoti",
    price: "₹1,999/night",
    rating: 4.3,
    reviews: 120,
    description: "A budget-friendly lodge with basic amenities.",
    facilities: [
      "Free WiFi",
      "Restaurant",
      "Garden",
      "Hiking Trails",
      "24/7 Reception",
    ],
  },
  {
    id: 5,
    name: "Hotel Royal Inn",
    images: ["/hotel5.jpg"],
    location: "Udaipur",
    price: "₹2,799/night",
    rating: 4.1,
    reviews: 90,
    description: "A royal experience in the heart of Udaipur.",
    facilities: [
      "Free WiFi",
      "Restaurant",
      "Bar",
      "Room Service",
      "24/7 Reception",
    ],
  },
  {
    id: 6,
    name: "The Imperial Hotel",
    images: [
      "/hotel10.jpeg",
      "/imperial2.jpg",
      "/imperial3.jpg",
      "/imperial4.jpg",
    ],
    location: "Udaipur",
    price: "₹2,199/night",
    rating: 4.0,
    reviews: 60,
    description: "A luxurious hotel with modern amenities.",
    facilities: [
      "Free WiFi",
      "Fitness Center",
      "Swimming Pool",
      "Restaurant",
      "Business Center",
    ],
  },
  {
    id: 7,
    name: "NOAH SPIRE 5 Star Boutique Hotel",
    images: ["/hotel11.jpeg", "/noah2.jpeg", "/noah3.jpg", "/noah4.jpg"],
    location: "Agartala",
    price: "₹4,999/night",
    rating: 4.4,
    reviews: 200,
    description: "A boutique hotel offering a unique experience.",
    facilities: ["Free WiFi", "Spa", "Restaurant", "Bar", "Room Service"],
  },
  {
    id: 8,
    name: "Narkel Kunja Resort",
    images: ["/hotel12.png", "/narkel2.jpg", "/narkel3.jpg", "/narkel4.jpg"],
    location: "Domboor Lake",
    price: "₹2,999/night",
    rating: 4.2,
    reviews: 80,
    description:
      "A lakeside resort with beautiful views and comfortable rooms.",
    facilities: [
      "Free WiFi",
      "Restaurant",
      "Bar",
      "Room Service",
      "24/7 Reception",
    ],
  },
];

// Comments (Mock data)
const comments = [
  {
    id: 1,
    hotelId: 1,
    author: "Debasish",
    text: "Excellent hotel!",
    rating: 5,
  },
  {
    id: 2,
    hotelId: 1,
    author: "Kunal",
    text: "Comfortable and well-equipped.",
    rating: 4,
  },
  // … more comments
];

export default function HotelDetailsPage() {
  // Retrieve hotel id from route parameters
  const { id } = useParams();
  const hotelId = Number(id);

  // Find hotel by id
  const hotel = hotels.find((item) => item.id === hotelId);

  if (!hotel) return <p>Loading...</p>;

  // Comments related to this hotel
  const hotelComments = comments.filter((item) => item.hotelId === hotelId);

  // Comments pagination
  const [currentCommentPage, setCurrentCommentPage] = useState(1);
  const commentsPerPage = 5;

  const totalComments = hotelComments.length;
  const totalCommentPages = Math.ceil(totalComments / commentsPerPage);
  const displayedComments = hotelComments.slice(
    (currentCommentPage - 1) * commentsPerPage,
    currentCommentPage * commentsPerPage
  );

  // Booking form state
  const [bookingName, setBookingName] = useState("");
  const [bookingDates, setBookingDates] = useState("");
  // Save to favorites
  const [isFavorite, setIsFavorite] = useState(false);
  // Comments form
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);

  // Pagination for related hotels
  const related = hotels.filter(
    (item) => item.location === hotel.location && item.id !== hotelId
  );

  // Calculate pagination
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  const total = related.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (currentPage - 1) * perPage;
  const displayed = related.slice(start, start + perPage);

  // Handle adding comments
  const handleAddComment = (e) => {
    e.preventDefault();

    console.log(`Add Comment by ${newComment} with rating ${newRating}.`);

    // Here you'd normally send this to your backend
    alert("Comment submitted!");
    setNewComment("");
    setNewRating(5);
  };

  // Handle favorites persistence
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    setIsFavorite(favorites.some((item) => item.id === hotelId));
  }, [hotelId]);

  const handleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      favorites = favorites.filter((item) => item.id !== hotelId);
    } else {
      favorites.push(hotel);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Title */}
      <h1 className="text-4xl font-semibold mb-4">{hotel.name}</h1>

      {/* Image Slider Section */}
      <div className="rounded-md overflow-hidden shadow-md mb-4 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
        >
          {hotel.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt={`${hotel.name} ${idx}`}
                width={700}
                height={500}
                className="rounded-md object-cover w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Booking Section */}
      <div className="bg-gray-50 p-4 rounded-md shadow-md mb-4">
        <h2>Book a room</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(`Booking for ${bookingName} from ${bookingDates}.`);
            alert("Booking submitted!");
          }}
        >
          <input
            aria-label="Name"
            type="text"
            placeholder="Your Name"
            value={bookingName}
            onChange={(e) => setBookingName(e.target.value)}
            className="p-2 border rounded-md w-full mb-4"
            required
          />

          <input
            aria-label="Dates"
            type="date"
            value={bookingDates}
            onChange={(e) => setBookingDates(e.target.value)}
            className="p-2 border rounded-md w-full mb-4"
            required
          />

          <button
            type="submit"
            className="bg-green-500 text-gray-50 px-4 py-2 rounded-md block w-full"
          >
            Book Now
          </button>
        </form>

        {/* Save to favorites */}
        <button
          aria-label="Save to favorites"
          onClick={handleFavorite}
          className="bg-blue-500 text-gray-50 px-4 py-2 rounded-md mt-4"
        >
          {isFavorite ? "❤️ Saved to Favorites" : "Save to Favorites"}
        </button>
      </div>

      {/* Description Section */}
      <div className="bg-gray-50 p-4 mt-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="mb-4">{hotel.description}</p>

        {/* Facilities Section with icons*/}
        <h3 className="text-lg font-semibold">Facilities</h3>
        <ul className="list-inside list-none mt-2 ml-4 space-y-1">
          {hotel.facilities.map((item, idx) => (
            <li key={idx}>🔹 {item}</li>
          ))}
        </ul>
      </div>

      {/* Comments Section */}
      <div className="bg-gray-50 p-4 mt-6 rounded-md shadow-md">
        <h3>Reviews</h3>
        <p>Average Rating: {hotel.rating} ⭐</p>
        <p>({hotel.reviews} reviews)</p>

        {/* Comments List */}
        <ul className="list-inside list-decimal mt-4 ml-4 space-y-1">
          {displayedComments.map((item) => (
            <li key={item.id}>
              <strong>{item.author}:</strong> {item.text} — {item.rating} ⭐
            </li>
          ))}
        </ul>

        {/* Comments Pagination */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalCommentPages }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                disabled={currentCommentPage === page}
                onClick={() => setCurrentCommentPage(page)}
                className="px-3 py-1 rounded-md border disabled:bg-gray-500 disabled:text-gray-50"
              >
                {page}
              </button>
            )
          )}
        </div>

        {/* Comment Submission Form*/}
        <form
          onSubmit={handleAddComment}
          className="flex flex-col mt-4 space-y-4"
        >
          <input
            aria-label="Add Comment"
            type="text"
            placeholder="Write a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="p-2 border rounded-md"
            required
          />

          <select
            aria-label="Rating"
            value={newRating}
            onChange={(e) => setNewRating(Number(e.target.value))}
            className="p-2 border rounded-md"
          >
            <option value="">Select Rating</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

          <button
            aria-label="Add Comment"
            type="submit"
            className="bg-green-500 text-gray-50 px-4 py-2 rounded-md hover:bg-green-800"
          >
            Submit Comment
          </button>
        </form>
      </div>

      {/* Location Section (with a map)*/}
      {/* Mock for now*/}
      {/* <div className="bg-gray-50 p-4 mt-6 rounded-md shadow-md">
        <h3>Location</h3>
        <p>{hotel.location}</p>
        {hotel.latitude && hotel.longitude ? (
          <LocationMap
            latitude={hotel.latitude}
            longitude={hotel.longitude}
            locationName={hotel.location}
          />
        ) : (
          <p>Map unavailable</p>
        )}
      </div> */}

      {/* Related Hotels Section */}
      <div className="bg-gray-50 p-4 mt-6 rounded-md shadow-md">
        <h3>Related Hotels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {displayed.map((item) => (
            <Link
              key={item.id}
              href={`/details/${item.id}`}
              className="border p-4 rounded-md shadow-md hover:bg-gray-100 transition duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
            >
              <div>
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={500}
                  height={300}
                  className="rounded-md object-cover mb-4"
                />
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p>Location: {item.location}</p>
                <p>Rating: {item.rating} ⭐</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination controls for related hotels*/}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              disabled={currentPage === page}
              onClick={() => setCurrentPage(page)}
              className="px-3 py-1 rounded-md border disabled:bg-gray-500 disabled:text-gray-50"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
