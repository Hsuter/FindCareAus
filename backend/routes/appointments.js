const express = require("express");
const axios = require("axios");
const router = express.Router();
const Appointment = require("../models/appoinment");
const Caregiver = require("../models/Caregiver");

// Your Google Maps API Key
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

// Helper function to get a detailed address (street, house number, building)
async function getDetailedAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await axios.get(url);
    if (response.data.results && response.data.results.length > 0) {
      const addressComponents = response.data.results[0].address_components;

      // Initialize address fields
      let street = "";
      let houseNumber = "";
      let building = "";

      // Parse the address components
      addressComponents.forEach((component) => {
        if (component.types.includes("route")) {
          street = component.long_name;
        } else if (component.types.includes("street_number")) {
          houseNumber = component.long_name;
        } else if (component.types.includes("premise")) {
          building = component.long_name; // This could be a building name
        }
      });

      // Combine the details into a full address
      let fullAddress = `${houseNumber} ${street}`;
      if (building) {
        fullAddress += `, ${building}`;
      }
      return fullAddress || "Address not available";
    } else {
      return "Address not available";
    }
  } catch (error) {
    console.error("Error during reverse geocoding:", error);
    return "Address lookup failed";
  }
}

// Book an appointment
router.post("/book", async (req, res) => {
  const { userId, caregiverId, date, time } = req.body;

  try {
    // Fetch caregiver details
    const caregiver = await Caregiver.findById(caregiverId);
    if (!caregiver) {
      return res.status(404).json({ error: "Caregiver not found" });
    }

    // Get the detailed address from lat and lng
    const detailedAddress = await getDetailedAddress(
      caregiver.lat,
      caregiver.lng
    );

    // Create a new appointment
    const newAppointment = new Appointment({
      userId,
      caregiverId,
      caregiverName: caregiver.name, // Include caregiver name
      caregiverContact: caregiver.contact, // Include caregiver contact
      caregiverAddress: detailedAddress, // Use the detailed decoded address
      date,
      time,
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ error: "Failed to book appointment" });
  }
});

// Fetch user appointments
// Route to get all appointments for a user
router.get("/", async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    const appointments = await Appointment.find({ userId })
      .populate("caregiverId", "name specialty") // Optional: populate caregiver details
      .exec();
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.status(200).json(deletedAppointment);
  } catch (error) {
    console.error("Error canceling appointment:", error);
    res.status(500).json({ error: "Failed to cancel appointment" });
  }
});
module.exports = router;
