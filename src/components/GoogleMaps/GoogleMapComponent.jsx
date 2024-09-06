import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  height: "100vh",
  width: "100%",
};

const defaultCenter = {
  lat: 28.613939, // Latitude for New Delhi
  lng: 77.209023, // Longitude for New Delhi
};

const GoogleMapComponent = () => {
  return (
    <div style={{ width: "700px", height: "500px" }}>
      <LoadScript googleMapsApiKey="AIzaSyBRPU9f_neKrMRo33LDanLxwMxnqN5l0fU">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
