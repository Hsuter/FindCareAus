const mongoose = require("mongoose");
const Caregiver = require("../models/Caregiver"); // Update the path to your Caregiver model
const dotenv = require("dotenv");

dotenv.config();

const caregivers = [
  {
    id: 13,
    name: "Paul Griffin",
    image: "https://ibb.co/r0gKnSf",
    specialty: "General Caregiver",
    contact: "0406172836",
    bio: "",
    rating: 4.5,
    distance: "2.3 km",
    lat: -33.8688, // Sydney
    lng: 151.2093, // Sydney
  },

  // Additional caregivers...
];

// Set strictQuery option
mongoose.set("strictQuery", false);

const uri = process.env.DB_URI;

async function insertCaregivers() {
  try {
    // Connect to the database
    await mongoose.connect(
      "mongodb+srv://harry:harry123@cluster0.c5xln.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected!");

    // Insert caregivers in bulk
    const result = await Caregiver.insertMany(caregivers);
    console.log(`${result.length} caregivers inserted!`);

    // Close the database connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting caregivers:", error);
  }
}

// Run the insertion script
insertCaregivers();
