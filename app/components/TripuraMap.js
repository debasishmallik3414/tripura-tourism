"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import the map to avoid SSR issues
const DynamicMap = dynamic(() => import("./Mapcontent"), {
  ssr: false,
});

const TripuraMap = () => {
  return <DynamicMap />;
};

export default TripuraMap;
