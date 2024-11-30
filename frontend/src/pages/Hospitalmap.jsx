import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom"; // Import useHistory for navigation
import axios from "axios";

const HospitalMap = () => {
  const [hospitals, setHospitals] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate(); // Initialize useHistory

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const fetchHospitals = async () => {
    try {
      const response = await axios.get(
        "https://myhospitalsapi.aihw.gov.au/api/v0/retired-myhospitals-api/hospitals"
      );
      const filteredHospitals = response.data
        .filter((hospital) => hospital.state === "NSW" && hospital.ispublic)
        .filter((hospital) => {
          if (!userLocation) return true;
          const distance = calculateDistance(
            userLocation.lat,
            userLocation.lng,
            hospital.latitude,
            hospital.longitude
          );
          return distance <= 40;
        });

      setHospitals(filteredHospitals);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchHospitals();
    }
  }, [userLocation]);

  const defaultCenter = userLocation || { lat: -25.2744, lng: 133.7751 };

  return (
    <div>
      {" "}
      <h2 className="text-3xl font-bold mb-8 text-center">
        Caregivers Near You
      </h2>
      <LoadScript googleMapsApiKey="AIzaSyCVqHouQRWKcLh5gb4E3ngLbWX8v0qA1zY">
        <GoogleMap
          center={defaultCenter}
          zoom={10}
          mapContainerStyle={{ height: "400px", width: "100%" }}
        >
          {userLocation && (
            <Marker
              position={userLocation}
              title="Your Location"
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              }}
            />
          )}

          {hospitals.map((hospital) => (
            <Marker
              key={hospital.id}
              position={{
                lat: Number(hospital.latitude),
                lng: Number(hospital.longitude),
              }}
              title={hospital.name}
              onClick={() => navigate(`/hospital/${hospital.id}`)} // Navigate to the details page
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default HospitalMap;
