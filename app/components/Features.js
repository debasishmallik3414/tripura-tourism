"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Activities & Experiences
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {["Trekking", "Wildlife Safari", "Cultural Tours"].map(
          (activity, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 text-center"
            >
              <Image
                src={`/icons/activity${idx + 1}.svg`}
                alt={activity}
                width={60}
                height={60}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{activity}</h3>
              <p className="text-gray-600 mt-2">
                Explore exciting {activity.toLowerCase()} opportunities in
                Tripura.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default FeatureSection;
