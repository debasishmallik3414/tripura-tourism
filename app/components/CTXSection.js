import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const TripuraTourismPage = () => {
  return (
    <div className="font-sans text-white">
      {/* Header Section */}
      <div
        className="bg-cover bg-center py-16 px-4"
        style={{ backgroundImage: "url('/banner10.jpeg')" }} // replace with your actual image
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Discover Amazing Deals Across Tripura
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-lg font-semibold">🌄 HILL STATION PACKAGES</h4>
            <p className="text-sm mt-2">
              Explore picturesque landscapes and cool breezes at Jampui Hills.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">🎯 LAST MINUTE OFFERS</h4>
            <p className="text-sm mt-2">
              Spontaneous travel? Get exclusive last-minute tour discounts.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">🎟️ 2 FOR 1 HERITAGE TOURS</h4>
            <p className="text-sm mt-2">
              Visit Ujjayanta Palace & Neermahal – history for two at one cost!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">
              🌐 MEMBER-ONLY EXPERIENCES
            </h4>
            <p className="text-sm mt-2">
              Enjoy tribal village stays and curated cultural journeys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripuraTourismPage;
