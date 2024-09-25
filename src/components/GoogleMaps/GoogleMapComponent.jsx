import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapStyles = {
  height: "100vh",
  width: "100%",
};

const defaultCenter = {
  lat: 28.613939, // Latitude for New Delhi
  lng: 77.209023, // Longitude for New Delhi
};

const GoogleMapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // Wait until the map is loaded
      const { AdvancedMarkerElement } = google.maps.marker;

      // Create and display the new marker
      const marker = new AdvancedMarkerElement({
        position: defaultCenter,
        map: mapRef.current.state.map,
        title: "New Delhi",
      });
    }
  }, []);

  return (
    <div style={{ width: "80vw", height: "50rem", marginTop: "1rem" }}>
      <LoadScript googleMapsApiKey="AIzaSyBRPU9f_neKrMRo33LDanLxwMxnqN5l0fU">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          onLoad={(map) => (mapRef.current = { state: { map } })}
        />
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
