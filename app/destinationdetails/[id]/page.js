'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const destinations = [
  { 
    id: 0, 
    title: 'Unakoti Hills',
    image: '/destination1.jpg',
    location: [24.1333, 92.1333],
    description: `Tripura has beautiful rock cut carvings and stone images at Unakoti, Debtamura and Pilak. Most of these carvings are huge in size and made on vertical walls exposed in the open atmosphere.
Unakoti: It is ‘Shaiba’ (Saivite) pilgrimage and dates back to 7th – 9th centuries if not earlier.The marvellous rock carvings, murals with their primitive beauty, waterfalls are not to be missed. Unakoti means one less than a crore and it is said that these many rock cut carvings are available here. As per Hindu mythology, when Lord Shiva was going to Kashi along with one crore gods and goddesses he made a night halt at this location. He asked all the gods and goddesses to wake up before sun rise and proceed for Kashi.
It is said that in the morning, except Shiva himself, no one else could get up so Lord Shiva set out for Kashi himself cursing the others to become stone images. As a result we have one less than a crore stone images and carvings at Unakoti.These carvings are located at a beautifully landscaped forest area with green vegetation all around which add to the beauty of the carvings.The images found at Unakoti are of two types, namely rock-carved figures and stone images.
Among the rock cut carvings, the central Shiva head and gigantic Ganesha figures deserve special mention. The central Shiva head known as ‘Unakotiswara Kal Bhairava’ is about 30 feet high including an embroidered head-dress which itself is 10 feet high. On each side of the head-dress of the central Shiva, there are two full size female figures - one of Durga standing on a lion and another female figure on the other side. In addition three enormous images of Nandi Bull are found half buried in the ground. There are various other stone as well as rock cut images at Unakoti. Every year a big fair popularly known as ‘Ashokastami Mela’ is held in the month of April which is visited by thousands of pilgrims.

How to go to Unakoti : From Agartala to Kailashahar by bus\by train upto Kumarghat and thenafter half an hour journey by other means to Kailashahar.`

  },
  {
    id: 1,
    title: 'Neermahal Palace',
    image: '/destination2.jpg',
    location: [23.8319, 91.2779],
    description: `Neermahal is a beautiful palace located in the middle of Rudrasagar Lake in Tripura, India. It was built by Maharaja Bir Bikram Kishore Manikya Debbarma in the 1930s as a summer retreat for the royal family. The palace is a blend of Hindu and Islamic architectural styles and is surrounded by lush greenery and serene waters. Visitors can enjoy boat rides to reach the palace and explore its stunning architecture, gardens, and the scenic beauty of the lake.`,
  },
  {
    id: 2,
    title: 'Jampui Hills',
    image: '/destination3.jpg',
    location: [23.8319, 91.2779],
    description: `Jampui Hills is a picturesque hill station located in the northeastern state of Tripura, India. It is known for its lush green landscapes, rolling hills, and pleasant climate. The region is inhabited by the Mizo tribe and offers a unique cultural experience with traditional festivals and local cuisine. Jampui Hills is also famous for its orange orchards, making it a popular destination during the orange harvest season. Visitors can enjoy trekking, exploring scenic viewpoints, and experiencing the tranquility of nature in this serene hill station.`,
  }, 
  // Add more destinations as needed
  {
    id: 3,
    title: 'Ujjayanta Palace, Agartala',
    image: '/ujjan.png',
    location: [23.8319, 91.2779],
    description: `Agartala is the capital city of Tripura, India, known for its rich cultural heritage and historical significance. The city is home to several attractions, including the Ujjayanta Palace, which showcases the royal history of Tripura. Agartala also features beautiful parks, temples, and markets that reflect the local culture and traditions. Visitors can explore the vibrant streets, taste local cuisine, and experience the warmth of the people in this charming city.`,
  }, 
  {
    id: 4,
    title: 'Sepahijala Wildlife Sanctuary',
    image: '/destination4.jpg',
    location: [23.8319, 91.2779],
    description: `Sepahijala Wildlife Sanctuary is a protected area in Tripura, India, known for its rich biodiversity and lush green landscapes. The sanctuary is home to various species of flora and fauna, including rare and endangered animals like the hoolock gibbons and clouded leopards. Visitors can explore the sanctuary through guided tours, enjoy birdwatching, and experience the natural beauty of the region. It is a perfect destination for nature lovers and wildlife enthusiasts.`,
  },
  {
    id: 5,
    title: 'Rudrasagar Lake',
    image: '/destination7.jpg',
    location: [23.8319, 91.2779],
    description: `Rudrasagar Lake, also known as Udaipur Lake, is a serene water body located in the town of Udaipur in Tripura, India. It is surrounded by lush greenery and is famous for its scenic beauty and tranquility. The lake is home to various species of birds and offers opportunities for boating and fishing. Visitors can enjoy the serene environment, take leisurely walks along the lakeside, and explore the nearby attractions such as the Tripura Sundari Temple.`,
  },
  {
    id: 6,
    title: 'Tripura Sundari Temple',
    image: '/destination5.jpeg',
    location: [23.8319, 91.2779],
    description: `Tripura Sundari Temple is a revered Hindu temple located in Udaipur, Tripura, India. It is dedicated to Goddess Tripura Sundari, one of the 51 Shakti Peethas in India. The temple is known for its stunning architecture and spiritual significance. Pilgrims from all over visit this temple to seek blessings and participate in various religious rituals. The temple's serene ambiance and beautiful surroundings make it a popular destination for devotees and tourists alike.`,
  },
  {
    id: 7,
    title: 'Kakrabon',
    image: '/Kakraban.jpg',
    location: [23.8319, 91.2779],
    description: `Kakrabon is a scenic village located in Tripura, India, known for its natural beauty and cultural heritage. The village is surrounded by lush green landscapes, hills, and rivers, making it a perfect destination for nature lovers. Visitors can explore the local culture, enjoy traditional cuisine, and experience the warmth of the local community. Kakrabon is also a great place for trekking and outdoor activities, offering a peaceful escape from the hustle and bustle of city life.`,
  },
  {
    id: 8,
    title: 'Buddha Mandir',
    image: '/destination9.jpg',
    location: [23.8319, 91.2779],
    description: `Buddha Mandir is a serene Buddhist temple located in Tripura, India. It is known for its peaceful ambiance and beautiful architecture. The temple serves as a spiritual retreat for Buddhists and visitors seeking tranquility. The serene surroundings and the presence of Buddha statues create a calming atmosphere for meditation and reflection.`,
  },
  {
    id: 9,
    title: 'Chabimura',
    image: '/Chabimura.jpg',
    location: [23.8319, 91.2779],
    description: `Chabimura is an archaeological site in Tripura, India, known for its ancient rock carvings and sculptures. The site features intricate carvings of Hindu deities and mythological figures on the rocks along the riverbanks. Chabimura offers a glimpse into the rich cultural heritage of Tripura and attracts history enthusiasts and tourists interested in ancient art.`,
  },
  {
    id: 10,
    title: 'Dumboor Lake',
    image: '/Dumboor-Lake.jpg',
    location: [23.8319, 91.2779],
    description: `Dumboor Lake is a picturesque lake located in Tripura, India. It is surrounded by lush greenery and hills, making it a popular spot for picnics and outdoor activities. The lake is also known for its boating opportunities and scenic views, attracting nature lovers and adventure seekers alike.`,
  },
  {
    id: 11,
    title: 'Bison National Park',
    image: '/Bison-National-Park.jpg',
    location: [23.8319, 91.2779],
    description: `Bison National Park, also known as Rajbari National Park, is a protected area in Tripura, India. It is home to a variety of wildlife, including the Indian bison (gaur), elephants, and various bird species. The park offers opportunities for wildlife enthusiasts to explore its rich biodiversity through guided safaris and nature trails. The lush forests and serene environment make it a perfect destination for nature lovers.`,
  },
  //...
];

// Mock related hotels
const relatedHotels = {
  0: [
    { id: 4, name: "Unakoti Tourist Lodge", location: [23.8319, 91.2779] },
  ],
  1: [
    { id: 2, name: "Lake Side Resort Neermahal", location: [23.8319, 91.2779] },
  ],
  2: [
    { id: 3, name: "Eden Tourist Lodge", location: [23.8319, 91.2779] },
  ],
  3: [
    { id: 4, name: "Hotel polo Towers", location: [23.8319, 91.2779] },
    { id: 7, name: "NOAH SPIRE 5 Star Boutique Hotel", location: [23.8319, 91.2779] },
  ],
  4: [
    { id: 4, name: "Sepahijala Wildlife Lodge", location: [23.8319, 91.2779] },
  ],
  5: [
    { id: 2, name: "Lake Side Resort Neermahal", location: [23.8319, 91.2779] },
  ],
  6: [
    { id: 6, name: "The Imperial Hotel", location: [23.8319, 91.2779] },
  ],
  7: [
    { id: 11, name: "Kakrabon Resort", location: [23.8319, 91.2779] },
  ],
  8: [
    { id: 4, name: "Hotel polo Towers", location: [23.8319, 91.2779] },
  ],
  9: [
    { id: 13, name: "Chabimura Heritage Hotel", location: [23.8319, 91.2779] },
  ],
  10: [
    { id: 8, name: "Narkel Kunja Resort", location: [23.8319, 91.2779] },
  ],
  11: [
    { id: 15, name: "Dumboor Lake Resort", location: [23.8319, 91.2779] },
  ],
  12: [
    { id: 16, name: "Bison National Park Lodge", location: [23.8319, 91.2779] },
  ],
  // Add more related hotels as needed
  // Example: 12: [{ id: 12, name: "Hotel Name", location: [23.8319, 91.2779] }],
}

export default function DestinationDetailsPage() {
  const { id } = useParams();
  const destinationId = Number(id);
  const destination = destinations.find((item) => item.id == destinationId);

  if (!destination) return <p>Destination not found</p>;

  // Extract related hotels for this destination
  const hotels = relatedHotels[destinationId] || [];

  return (
    <div className='bg-gray-50 min-h-screen p-6'>
      {/* Hero Section with Image Left and Text Right */}
      <div className='bg-green-100 p-6 rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-10'>
        {/* Image Left Side */}
        <div className='rounded-md overflow-hidden shadow-md transform hover:shadow-2xl hover:-translate-y-1 transition'>
          <Image src={destination.image} alt={destination.title} width={1000} height={500} className='rounded-md object-cover' />
        </div>

        {/* Text (About Section) Right Side */}
        <div className='bg-gray-100 text-gray-900 p-6 rounded-md shadow-md font-serif space-y-4'>
          <h1 className='text-4xl font-semibold'>{destination.title}</h1>
          <p className='text-gray-700'>{destination.description}</p>

          {/* Location Information */}
          <div>
            <h2 className='text-2xl font-semibold mt-4'>Location</h2>
            <p>Coordinates: {destination.location[0]}, {destination.location[1]}</p>
          </div>
        </div>
      </div>

      {/* Related Hotels Section */}
      <h2 className='text-2xl font-semibold mt-6'>Related Hotels</h2>
      <div className='bg-gray-100 p-4 mt-4 rounded-md shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div
              key={hotel.id}
              className='bg-gray-50 p-4 rounded-md shadow-md transform hover:shadow-2xl hover:-translate-y-1 transition space-y-2'
            >
              <h3 className='text-lg font-semibold'>{hotel.name}</h3>
              {/* Location can be displayed or a link to view its details */}
              <Link
                href={`/details/${hotel.id}`}
                className='text-green-500  font-semibold'
              >
                View details
              </Link>
            </div>
          ))
        ) : (
          <p>No related hotels found</p>
        )}

      </div>

      {/* Back to Destinations */}
      <div className='mt-6'>
        <Link
          href="/destination"
          className='text-gray-600 underline'
        >
          &larr; Back to Destinations
        </Link>
      </div>

    </div>
  )
}
