import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ userLocation, zoomLevel, caregivers }) => {
  const defaultCenter = {
    lat: userLocation?.latitude || -25.2744, // Latitude for Australia
    lng: userLocation?.longitude || 133.7751, // Longitude for Australia
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCVqHouQRWKcLh5gb4E3ngLbWX8v0qA1zY">
      <GoogleMap
        center={defaultCenter}
        zoom={zoomLevel}
        mapContainerStyle={{ height: "400px", width: "100%" }}
      >
        {userLocation && (
          <Marker
            position={{
              lat: userLocation.latitude,
              lng: userLocation.longitude,
            }}
            title="Your Location"
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          />
        )}
        {caregivers.map((caregiver) => (
          <Marker
            key={caregiver.id}
            position={{ lat: caregiver.lat, lng: caregiver.lng }}
            title={caregiver.name}
            onClick={() => alert(`Caregiver: ${caregiver.name}`)}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
