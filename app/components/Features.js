"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const activities = [
  {
    title: "Trekking",
    image: "/icons/trekking.png",
    description: "Explore exciting trekking opportunities in Tripura.",
  },
  {
    title: "Wildlife Safari",
    image: "/icons/safari.png",
    description: "Explore exciting wildlife safari opportunities in Tripura.",
  },
  {
    title: "Cultural Tours",
    image: "/icons/cultural.png",
    description: "Explore cultural tour opportunities in Tripura.",
  },
];

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="Features" data-aos="fade-up" className="bg-gray-50 py-16 px-6 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-10 text-center" data-aos="fade-down">
        Activities & Experiences
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {activities.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 text-center"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={60}
              height={60}
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
