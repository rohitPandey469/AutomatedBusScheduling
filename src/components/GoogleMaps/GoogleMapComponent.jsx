import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapStyles = {
  height: "100vh",
  width: "100%"
};

const defaultCenter = {
  lat: 40.712776, // Example: New York City coordinates
  lng: -74.005974,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBRPU9f_neKrMRo33LDanLxwMxnqN5l0fU">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
