// src/components/LocationMap.jsx
"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = ({ latitude, longitude, locationName }) => {
  if (!latitude || !longitude) {
    return <p className="text-center text-red-500">Map unavailable</p>;
  }

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "300px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{locationName || "Destination"}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
