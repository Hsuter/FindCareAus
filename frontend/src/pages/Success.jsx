import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Thank You for Your Donation!
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Your generosity helps us provide essential care and services to those in
        need. We truly appreciate your support!
      </p>
      <button
        className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
        onClick={() => navigate("/")}
      >
        Go Back to Home
      </button>
      <button
        className="mt-4 px-6 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
        onClick={() => navigate("/profile/donations")}
      >
        View Your Donations
      </button>
    </div>
  );
};

export default Success;
