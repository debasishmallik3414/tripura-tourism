import React from "react";

const TripuraTourismPage = () => {
  return (
    <div className="font-sans text-white">
      {/* Header Section */}
      <div className="relative bg-cover bg-center py-16 px-4" style={{ backgroundImage: "url('/gallery5.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 drop-shadow-lg">
            Discover Amazing Travel Deals Across Tripura
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold">🌄 HILL STATION PACKAGES</h4>
              <p className="text-sm mt-2">
                Escape to the misty heights of Jampui Hills—famous for its lush green valleys,
                panoramic sunrise views, and orange orchards.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">🎯 LAST MINUTE OFFERS</h4>
              <p className="text-sm mt-2">
                Planning a quick getaway? Enjoy exclusive discounts on spontaneous travel to
                Tripura's cultural and natural gems.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">🎟️ 2 FOR 1 HERITAGE TOURS</h4>
              <p className="text-sm mt-2">
                Explore Ujjayanta Palace, Neermahal & other landmarks—two travelers, one affordable ticket.
                Dive into Tripura’s royal heritage.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">🌐 MEMBER-ONLY EXPERIENCES</h4>
              <p className="text-sm mt-2">
                Unlock curated cultural journeys—from tribal village homestays to traditional dance performances
                and local cuisine tasting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripuraTourismPage;
