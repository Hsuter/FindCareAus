import {
  one,
  two,
  three,
  four,
  five,
  six,
  seen,
  eight,
  nine,
  ten,
  eleven,
  twelve,
} from "../assets/caregivers/index";

const caregivers = [
  {
    id: 1,
    name: "Alice Smith",
    image: one,
    specialty: "General Caregiver",
    contact: "0406172836",
    bio: "",
    rating: 4.5,
    distance: "2.3 km",
    lat: -33.8688, // Sydney
    lng: 151.2093, // Sydney
  },
  {
    id: 2,
    name: "Bob Johnson",
    image: two,
    specialty: "Physical Therapy",
    rating: 4.8,
    distance: "3.7 km",
    lat: -33.85, // Western Sydney
    lng: 150.9935, // Western Sydney
  },
  {
    id: 3,
    name: "Carla Williams",
    image: three,
    specialty: "Mental Health Support",
    rating: 4.9,
    distance: "1.5 km",
    lat: -33.87, // Sydney
    lng: 151.215, // Sydney
  },
  {
    id: 4,
    name: "Alice Smith",
    image: four,
    specialty: "General Caregiver",
    rating: 4.5,
    distance: "2.3 km",
    lat: -32.92, // Newcastle
    lng: 151.7817, // Newcastle
  },
  {
    id: 5,
    name: "Bob Johnson",
    image: five,
    specialty: "Physical Therapy",
    rating: 4.8,
    distance: "3.7 km",
    lat: -34.4289, // Wollongong
    lng: 150.8931, // Wollongong
  },
  {
    id: 6,
    name: "Carla Williams",
    image: six,
    specialty: "Mental Health Support",
    rating: 4.9,
    distance: "1.5 km",
    lat: -31.98, // Central Coast
    lng: 152.4385, // Central Coast
  },
  {
    id: 7,
    name: "Alice Smith",
    image: seen,
    specialty: "General Caregiver",
    rating: 4.5,
    distance: "2.3 km",
    lat: -33.0181, // Hunter Valley
    lng: 151.627, // Hunter Valley
  },
  {
    id: 8,
    name: "Bob Johnson",
    image: eight,
    specialty: "Physical Therapy",
    rating: 4.8,
    distance: "3.7 km",
    lat: -32.512, // Mid North Coast
    lng: 152.1395, // Mid North Coast
  },
  {
    id: 9,
    name: "Carla Williams",
    image: nine,
    specialty: "Mental Health Support",
    rating: 4.9,
    distance: "1.5 km",
    lat: -35.2813, // Southern Highlands
    lng: 149.1293, // Southern Highlands
  },
  {
    id: 10,
    name: "Alice Smith",
    image: ten,
    specialty: "General Caregiver",
    rating: 4.5,
    distance: "2.3 km",
    lat: -33.8836, // North Coast
    lng: 151.0902, // North Coast
  },
  {
    id: 11,
    name: "Bob Johnson",
    image: eleven,
    specialty: "Physical Therapy",
    rating: 4.8,
    distance: "3.7 km",
    lat: -33.3989, // Far South Coast
    lng: 150.2713, // Far South Coast
  },
  {
    id: 12,
    name: "Carla Williams",
    image: twelve,
    specialty: "Mental Health Support",
    rating: 4.9,
    distance: "1.5 km",
    lat: -31.9801, // Albury
    lng: 147.3607, // Albury
  },
  // Additional caregivers...
];

const appointments = [
  { id: 1, caregiverName: "Alice Smith", date: "2024-11-15", time: "10:00 AM" },
  { id: 2, caregiverName: "Bob Johnson", date: "2024-11-16", time: "2:00 PM" },
];

const savedCaregivers = [
  { id: 1, name: "Alice Smith", specialty: "General Caregiver" },
  { id: 2, name: "Carla Williams", specialty: "Mental Health Support" },
];

export { caregivers, appointments, savedCaregivers };
