const mongoose = require("mongoose");

const caregiverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String }, // Use the image file name or URL if storing images in the cloud
  bio: { type: String },
  contact: { type: String },
  address: { type: String },
  specialty: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  distance: { type: String }, // Consider calculating distance based on lat/lng later
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const Caregiver = mongoose.model("Caregiver", caregiverSchema);

module.exports = Caregiver;
