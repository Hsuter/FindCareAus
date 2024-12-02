import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { calculateDistance } from "../utils";
import Map from "./Map";
import { useNavigate } from "react-router-dom";
import { fetchCaregivers } from "../features/caregiverSlice.js";
import { useSelector, useDispatch } from "react-redux";

const DEFAULT_LOCATION = { latitude: -25.2744, longitude: 133.7751 };

function CaregiversNearYou() {
  const [userLocation, setUserLocation] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    gender: "",
    experience: "",
    distance: "",
    sortBy: "distance",
  });

  const caregivers = useSelector((state) => state.caregivers.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch caregivers with debounced search
  const debouncedFetch = debounce((term) => {
    dispatch(fetchCaregivers(term));
  }, 500);

  useEffect(() => {
    debouncedFetch(searchTerm);
    return debouncedFetch.cancel;
  }, [searchTerm]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        setZoomLevel(10);
      },
      () => {
        console.warn("Geolocation not available. Using default location.");
        setUserLocation(DEFAULT_LOCATION);
        setZoomLevel(10);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  const caregiversWithDistance = caregivers.map((caregiver) => ({
    ...caregiver,
    distance: calculateDistance(
      userLocation?.latitude || DEFAULT_LOCATION.latitude,
      userLocation?.longitude || DEFAULT_LOCATION.longitude,
      caregiver.lat,
      caregiver.lng
    ),
  }));

  const filteredCaregivers = caregiversWithDistance
    .filter((caregiver) => {
      if (filters.gender && caregiver.gender?.toLowerCase() !== filters.gender)
        return false;
      if (
        filters.experience &&
        caregiver.experience < parseInt(filters.experience, 10)
      )
        return false;
      if (filters.distance && caregiver.distance > parseFloat(filters.distance))
        return false;
      return true;
    })
    .sort((a, b) => {
      if (filters.sortBy === "distance") return a.distance - b.distance;
      if (filters.sortBy === "rating") return b.rating - a.rating;
      if (filters.sortBy === "experience") return b.experience - a.experience;
      return 0;
    });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Caregivers Near You
      </h2>
      <div className="mb-6">
        <Map
          userLocation={userLocation}
          zoomLevel={zoomLevel}
          caregivers={filteredCaregivers}
        />
      </div>
      <div className="mb-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded"
        />
        <select
          name="gender"
          value={filters.gender}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="number"
          name="experience"
          value={filters.experience}
          onChange={handleFilterChange}
          placeholder="Min Experience (years)"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="distance"
          value={filters.distance}
          onChange={handleFilterChange}
          placeholder="Max Distance (km)"
          className="p-2 border rounded"
        />
        <select
          name="sortBy"
          value={filters.sortBy}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="distance">Sort by Distance</option>
          <option value="rating">Sort by Rating</option>
          <option value="experience">Sort by Experience</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCaregivers.map((caregiver) => (
          <div
            key={caregiver._id}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            onClick={() => navigate(`/caregiver/${caregiver._id}`)}
          >
            <img
              src={caregiver.image}
              alt={caregiver.name}
              className="w-50 h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{caregiver.name}</h3>
            <p className="text-gray-600">Specialty: {caregiver.specialty}</p>
            <p className="text-gray-600">Rating: ⭐{caregiver.rating}</p>
            <p className="text-green-700 font-semibold">
              Distance: {caregiver.distance.toFixed(1)} km
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaregiversNearYou;
