// src/components/LocationMap.jsx
'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLng } from 'leaflet';
import React from 'react';

export default function LocationMap({ latitude,longitude,locationName}) {
  if (!latitude || !longitude) return <p>Map unavailable</p>;

  return (
    <MapContainer center={[latitude,longitude]} zoom={13} style={{height:'300px',width:'100%'}}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[latitude,longitude]}>
        <Popup>{locationName}</Popup>
      </Marker>
    </MapContainer>
  )
}
