import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const HospitalDetails = () => {
  const { id } = useParams(); // Get hospital id from the URL
  const [hospital, setHospital] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch hospital data by id
    const fetchHospitalDetails = async () => {
      try {
        const response = await axios.get(
          `https://myhospitalsapi.aihw.gov.au/api/v0/retired-myhospitals-api/hospitals/${id}`
        );
        setHospital(response.data);
      } catch (error) {
        console.error("Error fetching hospital details:", error);
      }
    };

    fetchHospitalDetails();
  }, [id]);

  const handleSendMessage = () => {
    // Implement sending message logic here
    console.log(`Message to ${hospital.name}: ${message}`);
    alert(`Message sent to ${hospital.name}`);
  };

  if (!hospital)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="text-3xl text-darkgreen font-bold mb-2">
          {hospital.name}
        </h1>
        <p className="text-lg text-gray-600">
          {hospital.phnname}, {hospital.state}
        </p>
      </div>

      {/* Social Media Links */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
        <div className="flex justify-center gap-4">
          <a
            href={hospital.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Facebook
          </a>
          <a
            href={hospital.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition  "
          >
            Twitter
          </a>
          <a
            href={hospital.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md text">
        <h3 className="text-2xl font-semibold text-darkgreen mb-4">
          Contact Us
        </h3>

        <input
          placeholder="Your name"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:border-darkgreen"
        />
        <input
          placeholder="Email"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:border-darkgreen"
        />
        <input
          placeholder="Phone number"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:border-darkgreen"
        />
        <textarea
          placeholder="Write your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:border-darkgreen h-24 resize-none"
        />

        <button
          onClick={handleSendMessage}
          className="bg-darkgreen text-white rounded-lg py-2 px-6 hover:bg-green-800 transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default HospitalDetails;
