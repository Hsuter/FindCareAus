// models/Appointment.js
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  caregiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Caregiver",
    required: true,
  },
  caregiverName: { type: String, required: true }, // Store caregiver's name
  caregiverContact: { type: String, required: true }, // Store caregiver's contact
  caregiverAddress: { type: String, required: true }, // Store caregiver's address
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, default: "pending" },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
