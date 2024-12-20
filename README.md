# Caregivers Finder Website

The **Caregivers Finder Website** is a platform that connects users with caregivers in their area. Users can search for caregivers, view their details, and book appointments easily.

## Features

- **Search Functionality:** Search caregivers by name.
- **Filters:** Filter caregivers by gender, experience, and distance.
- **Sorting Options:** Sort caregivers by distance, rating, or experience.
- **Map Integration:** Display caregivers on a map with their respective distances.
- **Caregiver Details:** View detailed profiles of caregivers, including specialty and ratings.
- **Appointment Booking:** Book appointments directly with selected caregivers.

## Technology Stack

### Frontend

- **React**: Framework for building the user interface.
- **Redux Toolkit**: State management for efficient data handling.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### Backend

- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing caregiver data.

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **MongoDB**: Set up MongoDB for database operations.

---

### Steps

1. **Unzip the Files**

   - Extract the ZIP file to your desired directory.

2. **Navigate to the Project Folder**
   ```bash
   cd caregivers-finder
   ```
3. \*\*Install Dependencies in backend
   cd backend
   npm install
4. **Install dependacies frontend**
   cd frontend
   npm install
5. **Set Up Environment Variables**

## Create a .env file in the backend folder.

    DB_URI=
    JWT_SECRET_KEY
    STRIPE_SECRET_KEY
    CLIENT_URL

### Start the Servers

    cd backend
    run node index.js
    cd frontend
    npm run dev

# Usage

    Search and Filter Caregivers
    Type a name in the search bar to find specific caregivers.
    Use dropdown menus and input fields to filter and sort the list.
    View Caregiver Details
    Click on a caregiver's card to view their full profile.
    Book Appointments
    Select a caregiver and proceed to book an appointment.

# Known Issues

    Geolocation Permissions: Ensure browser permissions for location services are enabled.
    Backend Search: Ensure MongoDB is running and properly connected.

# License

This project is licensed under the MIT License. See the LICENSE file for details.
