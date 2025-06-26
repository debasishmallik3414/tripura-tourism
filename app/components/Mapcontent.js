"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef } from "react";

// Fix leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Tourist places in Tripura
const destinations = [
  { name: "Neermahal", coords: [23.5005, 91.9837] },
  { name: "Unakoti", coords: [24.3145, 92.0158] },
  { name: "Jampui Hills", coords: [23.9566, 92.4044] },
  { name: "Sepahijala Wildlife Sanctuary", coords: [23.5759, 91.2754] },
  { name: "Ujjayanta Palace", coords: [23.8315, 91.2822] },
  { name: "Kamalasagar Temple", coords: [23.4259, 91.1479] },
  { name: "Chabimura", coords: [23.4922, 91.6242] },
  { name: "Tripura Sundari Temple", coords: [23.528, 91.4911] },
  { name: "Dumboor Lake", coords: [23.6555, 91.7504] },
  { name: "Baramura Eco Park", coords: [23.789, 91.4089] },
];

const MapContent = () => {
  const mapRef = useRef(null);

  // Cleanup on unmount (for dev/hot reload)
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <MapContainer
      center={[23.83, 91.28]}
      zoom={8}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
      whenCreated={(mapInstance) => {
        mapRef.current = mapInstance;
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {destinations.map((place, index) => (
        <Marker key={index} position={place.coords}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapContent;
