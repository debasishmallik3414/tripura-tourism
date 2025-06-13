'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';


<Head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-papVrE8MvGJ3xz5Y2zZq9WvppcXh3MPaU5OJo0u+9MB2UOqzKVXXRJhiDyId7XhT8JoqhQkxCJBeU8HZGfSeUg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
</Head>
export default function Home() {
  const [query, setQuery] = useState('');
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
      <nav className="flex items-center backdrop-blur-xs justify-between bg-gradient-to-b from-green-50 via-white 
       shadow-md px-4 py-2 sticky top-0 z-50 flex-wrap">
        <div className="flex items-center gap-2">
          <Image
            src="/tripura-logo1.png"
            alt="Logo"
            className="cursor-pointer"
            onClick={() => window.location.reload()}
            width={60}
            height={60}
          />
        </div>

        <ul className="hidden md:flex gap-4 text-sm font-medium">
          <li><a href="#home" onClick={() => window.location.reload()} className="hover:text-green-600">Home</a></li>
          <li><a href="#features" className="hover:text-green-600">Features</a></li>
          <li><a href="#top-destination" className="hover:text-green-600">Place</a></li>
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#contact" className="hover:text-green-600">Contact Us</a></li>
        </ul>

        <div className="md:hidden">
          <details className="relative">
            <summary className="cursor-pointer font-semibold">Menu</summary>
            <ul className="absolute right-0 bg-white shadow-md rounded-md p-3 mt-2 text-sm space-y-2 w-40 z-50">
              <li><a href="#home" onClick={() => window.location.reload()} className="block hover:text-yellow-600">Home</a></li>
              <li><a href="#features" className="block hover:text-yellow-600">Features</a></li>
              <li><a href="#top-destinations" className="block hover:text-yellow-600">Place</a></li>
              <li><a href="#gallery" className="block hover:text-yellow-600">About</a></li>
              <li><a href="#contact" className="block hover:text-yellow-600">Contact Us</a></li>
            </ul>
          </details>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto mt-4 md:mt-0">
          <form onSubmit={handleSearch} className="flex w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-1 rounded-l-md border border-gray-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="bg-green-600 text-white font-bold px-3 py-1 rounded-r-md hover:bg-green-800">Go</button>
          </form>
          <Link
  href="/signup"
  className="inline-flex items-center justify-between bg-green-600 text-white px-6 py-1.5 rounded-full font-medium hover:bg-green-800 transition whitespace-nowrap sm:text-base text-sm"
>
  <span className="tracking-wide">SIGN UP</span>
  <span className="ml-2 bg-white text-gray-700 rounded-full p-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </span>
</Link>
        </div>
      </nav>

{/* Banner Section */}
<section className="w-screen h-screen relative">
  <h1
    className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold text-gray-100 animate-fadeOut">
    Welcome to Tripura
  </h1>

  {/* Slider */}
  <Swiper
    modules={[Navigation, Pagination, Autoplay, EffectFade]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    loop
    effect="fade"
    className="w-full h-full">
    {[
      { src: "/banner1.jpg" },
      { src: "/banner2.jpg" },
      { src: "/banner3.jpg" },
      { src: "/banner4.jpg" },
      { src: "/banner5.jpg" },
      { src: "/banner6.jpg" },
      { src: "/banner7.jpg" },
      { src: "/banner8.jpg" },
      { src: "/banner9.jpg" },
      { src: "/destination8.jpg" },
      { src: "/destination9.png" },
      { src: "/nature.jpg" },
      { src: "/banner10.jpeg" },
    ].map((slide, index) => (
      <SwiperSlide key={index}>
        {/* Image fills the container and may be cropped to cover fully */}
        <div className="absolute w-full h-full">
          <Image
            src={slide.src}
            alt={`Slide ${index + 1}`}
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

{/* Top Destinations */}
<section id='top-destinations' className="py-12 px-4 bg-gray-50">
  <h2 className="text-3xl font-semibold text-center text-green-600 mb-4 p-4">
    Top Destinations
  </h2>
  <p className="text-center text-gray-700 mb-6">
    Explore the most beautiful places in Tripura
  </p>

  <div className="max-w-6xl mx-auto">
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      spaceBetween={30}
      breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
      {[
        { title: "Unakoti Hills", image: "/destination1.jpg" },
        { title: "Neermahal Palace", image: "/destination2.jpg" },
        { title: "Jampui Hills", image: "/destination3.jpg" },
        { title: "Sepahijala Wildlife Sanctuary", image: "/destination4.jpg" },
        { title: "Tripura Sundari Temple", image: "/destination5.jpeg" },
      ].map((dest, index) => (
        <SwiperSlide key={index}>
          <div className="bg-green-600 text-gray-50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-500 transform hover:translate-y-2">
            {/* Fixed Image Height */}
            <div className="h-48 overflow-hidden">
              <Image
                src={dest.image}
                alt={dest.title}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>

            {/* Fixed Content Height */}
            <div className="p-4 h-32 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2">
                {dest.title}
              </h3>
              <p className="text-gray-100">
                Discover the charm and culture of {dest.title}.
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="flex justify-end mt-4">
      <Link
        href="/destination"
        className="bg-green-600 text-gray-50 px-4 py-2 rounded-md hover:bg-green-700 transition inline-flex items-center">
        <span>View All Destinations</span>
      </Link>
    </div>
  </div>
</section>

{/* topdeals-hotels */}
<section id='top-deals' className="py-12 px-4 bg-green-100">
  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
    Top Hotel Deals
  </h2>
  <p className="text-center text-gray-600 mb-6">
    Discover the best places to stay in Tripura with unbeatable prices
  </p>

  <div className="max-w-6xl px-4 mx-auto">
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}>
      {[
        {
          id: 1,
          name: "Hotel Polo Towers.",
          image: "/hotel1.jpg",
          location: "Agartala",
          price: "₹7,999/night",
        },
        {
          id: 2,
          name: "Lake Side Resort Neermahal",
          image: "/hotel2.jpg",
          location: "Rudrasagar",
          price: "₹3,499/night",
        },
        {
          id: 3,
          name: "Eden Tourist Lodge",
          image: "/hotel3.png",
          location: "Jampui Hills",
          price: "₹2,499/night",
        },
        {
          id: 4,
          name: "Unakoti Tourist Lodge",
          image: "/hotel4.jpg",
          location: "Unakoti",
          price: "₹1,999/night",
        },
        {
          id: 5,
          name: "Hotel Royal Inn",
          image: "/hotel5.jpg",
          location: "Udaipur",
          price: "₹2,799/night",
        },
      ].map((hotel, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:translate-y-1 transition p-4">
            {/* Image with zoom-out hover effect */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover transform scale-105 hover:scale-100 transition-transform duration-500 ease-in-out"
              />
            </div>

            <div className="pt-4">
              <h3 className="text-md font-semibold mb-1">
                {hotel.name}
              </h3>
              <p className="absolute top-3 left-3 bg-green-600 text-gray-50 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {hotel.location}
              </p>
              <p className="text-blue-600 mt-2 font-semibold">
                {hotel.price}
              </p>

              {/* Book Now Button */}
              <Link
                href={`/book/${hotel.id}`}
                className="bg-green-600 text-gray-50 px-4 py-2 mt-4 rounded-md hover:bg-green-700 transition inline-block">
                Book Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="flex justify-end mt-4">
      <Link
        href="/hotels"
        className="bg-green-600 text-gray-50 px-6 py-2 rounded-md hover:bg-green-700 transition">
        View All →
      </Link>
    </div>
  </div>
</section>
 {/* features */}
    <section id='features' className="py-12 px-4">
  <h2 className="text-3xl font-semibold text-center mb-6">
    Discover Our Unique Features
  </h2>
  <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
    Experience the best that Tripura offers — a blend of culture, nature, food, and tradition.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl px-4 mx-auto">
    {[
      {
        title: "Cultural Sightseeing",
        icon: "/icons/cultural.jpeg",
        description: "Immerse yourself in rich traditions, historical sites, and stories from the past.",
      },
      {
        title: "Wildlife Safari",
        icon: "/icons/safari.jpg",
        description: "Get up close with nature’s finest creatures in their natural habitats.",
      },
      {
        title: "Handcrafted Souvenirs",
        icon: "/icons/souvenirs.jpg",
        description: "Take back a piece of Tripura with you — handcrafted by locals.",
      },
      {
        title: "Adventure Sports",
        icon: "/icons/sports.jpg",
        description: "Paragliding, kayaking, trekking — we’ve got all the adrenaline rush you want!",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="group p-6 rounded-xl transform hover:shadow-2xl hover:-translate-y-2 transition ease-in-out duration-500 text-center bg-gray-50 hover:bg-green-100 hover:cursor-pointer">
        {/* Circle Image */}
        <img
          src={item.icon}
          alt={`${item.title} icon`}
          className="mx-auto mb-4 w-16 h-16 rounded-full object-cover p-1 border-4 border-green-500"
        />

        <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition">
          {item.title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-900 transition">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</section>
{/* Contact */}
<section id="contact" className="py-12 px-4 bg-gray-50">
  <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">Contact Us</h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Left - Map */}
    <div className="w-full h-80 md:h-full">
      <iframe
        title="Tripura Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114184.5310499297!2d91.24505690000001!3d23.8314579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f4c6af79b011%3A0x30f94a462574f4d4!2sAgartala%2C%20Tripura!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="rounded-lg shadow-md border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    {/* Right - Contact Form */}
    <form id='contact' className="w-full space-y-4 bg-white p-6 rounded-lg shadow-md">
      <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <textarea rows="4" placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-800 transition">
        Send Message
      </button>
    </form>
  </div>
</section>

<footer id='about' className="bg-gray-900 text-gray-300 py-12 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    {/* Company Info */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Tripura Tourism</h4>
      <p className="text-sm mb-4">Discover breathtaking destinations, vibrant culture, and serene nature in Tripura.</p>
      
      {/* Social Links */}
      <div className="flex gap-3 mt-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
          <i className="fab fa-pinterest-p"></i>
        </a>
      </div>
    </div>

    {/* Blogs */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Blogs</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-yellow-400 transition">Top 10 Places to Visit</a></li>
        <li><a href="#" className="hover:text-yellow-400 transition">Cultural Festivals of Tripura</a></li>
        <li><a href="#" className="hover:text-yellow-400 transition">Hidden Gems for Nature Lovers</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
      <ul className="text-sm space-y-2">
        <li>📍 Agartala, Tripura</li>
        <li>📞 +91 98765 43210</li>
        <li>✉️ support@tripuratourism.in</li>
        <li><a href="#contact" className="hover:text-yellow-400 transition">Contact Form</a></li>
      </ul>
    </div>

    {/* Recent Trips Gallery */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Recent Trips</h4>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <img
            key={i}
            src={`/gallery${(i % 6) + 1}.jpg`}
            alt={`Trip ${i}`}
            className="w-full h-16 object-cover rounded"
          />
        ))}
      </div>
    </div>
  </div>

  {/* Bottom strip */}
  <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
    © 2025 Tripura Tourism. All rights reserved.
  </div>
</footer>
    </div>
  );
}
