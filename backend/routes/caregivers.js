const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Caregiver = require("../models/Caregiver");

// GET all caregivers
router.get("/", async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.json(caregivers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching caregivers" });
  }
});

// GET a specific caregiver by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid caregiver ID" });
  }

  try {
    const caregiver = await Caregiver.findById(id);
    if (!caregiver) {
      return res.status(404).json({ message: "Caregiver not found" });
    }
    res.json(caregiver);
  } catch (error) {
    res.status(500).json({ message: "Error fetching caregiver" });
  }
});

// POST a new caregiver
router.post("/", async (req, res) => {
  const { name, image, specialty, rating, distance, lat, lng } = req.body;
  const caregiver = new Caregiver({
    name,
    image,
    specialty,
    rating,
    distance,
    lat,
    lng,
  });

  try {
    const newCaregiver = await caregiver.save();
    res.status(201).json(newCaregiver);
  } catch (error) {
    res.status(400).json({ message: "Error saving caregiver" });
  }
});

module.exports = router;
