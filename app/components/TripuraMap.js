"use client";

import dynamic from "next/dynamic";
// Dynamically import the map to avoid SSR issues
const DynamicMap = dynamic(() => import("./Mapcontent"), {
  ssr: false,
});

const TripuraMap = () => {
  return <DynamicMap />;
};

export default TripuraMap;
