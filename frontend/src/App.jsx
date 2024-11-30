import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Booking from "./pages/BookingPage";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Login from "./pages/Login";
import HospitalMap from "./pages/Hospitalmap";
import HospitalDetails from "./pages/HospitaDetails";
import Donation from "./pages/Donation";
import CaregiversNearYou from "./pages/CaregiversNearYou";
import CaregiverDetails from "./pages/CaregiversDetailsPage";
import Checkout from "./pages/Checkout";
import Appointment from "./pages/Appointments";
import Success from "./pages/Success";
import Register from "./pages/Register";

import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="flex-grow">
        {" "}
        {/* Main content that grows to fill the space */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/Signup" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Hospitalmap" element={<HospitalMap />} />
          <Route path="/hospital/:id" element={<HospitalDetails />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/caregivers" element={<CaregiversNearYou />} />
          <Route path="/caregiver/:id" element={<CaregiverDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="donation/success" element={<Success />} />
        </Routes>
      </main>
      <Footer />

      <div className="rounded-full fixed z-50 bottom-0 right-0 bg-white">
        <a href="#top">
          <ArrowDropUpIcon fontSize="large" />
        </a>
      </div>

      {/* Add ToastContainer to display toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
