import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCaregivers } from "../features/caregiverSlice"; // Import Redux thunk
import Map from "./Map";
import { bookAppointment } from "../features/appointmentSlice";
import { toast } from "react-toastify";

const DEFAULT_LOCATION = { latitude: -25.2744, longitude: 133.7751 }; // Fallback location

const workingHours = {
  Monday: { start: "08:00", end: "18:00" },
  Tuesday: { start: "08:00", end: "18:00" },
  Wednesday: { start: "08:00", end: "18:00" },
  Thursday: { start: "08:00", end: "18:00" },
  Friday: { start: "08:00", end: "18:00" },
  Saturday: { start: "08:00", end: "12:00" },
  Sunday: { start: null, end: null },
};

const CaregiverDetails = () => {
  const { id } = useParams(); // Fetch dynamic ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  console.log(auth._id);

  const caregivers = useSelector((state) => state.caregivers.list); // Access caregivers from Redux store
  const caregiver = caregivers.find((cg) => cg._id === id); // Use _id for comparison

  const [userLocation, setUserLocation] = useState(null);
  const [appointment, setAppointment] = useState({ date: "", time: "" });
  const [error, setError] = useState("");
  const [isBooked, setIsBooked] = useState(false); // State to track if the appointment is booked

  const validateAppointmentTime = () => {
    const selectedDate = new Date(appointment.date);
    const dayOfWeek = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const hours =
      caregiver.workingHours?.[dayOfWeek] || workingHours[dayOfWeek];

    if (!hours?.start || !hours?.end) {
      setError("Caregiver is not available on this day.");
      return false;
    }

    if (appointment.time < hours.start || appointment.time > hours.end) {
      setError(
        `Please select a time between ${hours.start} and ${hours.end} on ${dayOfWeek}.`
      );
      return false;
    }

    setError("");
    return true;
  };

  useEffect(() => {
    if (!caregivers.length) {
      dispatch(fetchCaregivers());
    }
  }, [dispatch, caregivers.length]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        console.warn("Geolocation not available, using default location");
        setUserLocation(DEFAULT_LOCATION);
      }
    );
  }, []);

  if (!caregiver) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-red-500">Caregiver not found.</p>
      </div>
    );
  }

  const renderAvailability = () => {
    return Object.keys(workingHours).map((day) => {
      const hours = workingHours[day];
      return (
        <p key={day} className="text-gray-600">
          <strong>{day}:</strong>{" "}
          {hours.start && hours.end
            ? `${hours.start} - ${hours.end}`
            : "Unavailable"}
        </p>
      );
    });
  };

  const handleBooking = () => {
    console.log("Selected Appointment:", appointment);
    if (!validateAppointmentTime()) return;

    const appointmentData = {
      userId: auth._id,
      caregiverId: id,
      caregiverName: caregiver.name, // Add caregiver's name
      caregiverContact: caregiver.contact, // Add caregiver's contact
      caregiverAddress: caregiver.address, // Add caregiver's address
      date: appointment.date,
      time: appointment.time,
    };

    dispatch(bookAppointment(appointmentData))
      .unwrap()
      .then(() => {
        setIsBooked(true);
        console.log("Appointment booked successfully!");
        toast.success("Appointment booked");
        navigate("/appointments");
      })
      .catch((err) => {
        setError(err.message || "Failed to book appointment");
        console.error("Booking error:", err);
      });
  };

  console.log("Appointment:", appointment);
  console.log("isBooked:", isBooked);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">{caregiver.name}</h2>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center mb-4">
          <img
            src={caregiver.image}
            alt={caregiver.name}
            className="w-50 h-48 object-cover rounded-md"
          />
        </div>
        <p className="text-gray-600 text-lg mb-4">{caregiver.specialty}</p>
        <div className="mb-6">
          {userLocation && (
            <Map
              userLocation={userLocation}
              zoomLevel={12}
              caregivers={[caregiver]} // Only show this caregiver on the map
            />
          )}
        </div>
        <p className="text-gray-700 mb-2">Contact: {caregiver.contact}</p>
        <p className="text-gray-700 mb-4">Bio: {caregiver.bio}</p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Availability</h3>
          <div className="text-gray-700">{renderAvailability()}</div>
        </div>

        {isBooked ? (
          <div className="text-center text-green-500 font-semibold">
            Appointment successfully booked!
          </div>
        ) : (
          <div className="mt-4 z-10">
            <label className="block text-gray-700 mb-2">Select Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              onChange={(e) =>
                setAppointment({ ...appointment, date: e.target.value })
              }
            />

            <label className="block text-gray-700 mb-2">Select Time</label>

            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              onChange={(e) =>
                setAppointment({ ...appointment, time: e.target.value })
              }
            />

            {error && <p className="text-red-500">{error}</p>}

            <button
              className=" z-10 mt-4 w-full bg-darkgreen text-white py-2 rounded hover:bg-green-700 transition"
              onClick={handleBooking}
            >
              Book Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaregiverDetails;
