import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { donationImage } from "../assets/index";

const Donation = () => {
  const navigate = useNavigate();

  const handleDonate = async (amount) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/donation/create-checkout-session",
        {
          amount,
        }
      );
      window.location.href = response.data.url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error("Error initiating donation:", error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pb-20 px-2">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-[50px] font-bold text-center">Support Our Cause</h1>
        <p className="text-[20px] font-light text-center">
          Your donation helps us provide essential care services to those in
          need. Every contribution counts!
        </p>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {[25, 50, 100].map((amount) => (
          <div
            key={amount}
            className="flex flex-col bg-white rounded-lg border-green hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center cursor-pointer gap-2 relative p-4 w-[400px]"
          >
            <img
              src={donationImage}
              alt="donate_option"
              className="w-full h-[200px] rounded-lg"
            />
            <p className="text-[25px] font-semibold mt-2">${amount}</p>
            <p className="text-gray-600">
              {amount === 25
                ? "Supports one therapy session for a community member."
                : amount === 50
                ? "Provides medication assistance for those in need."
                : "Funds a week of in-home care services for one person."}
            </p>
            <button
              onClick={() => handleDonate(amount)}
              className="rounded-lg bg-blue-500 text-white px-6 py-2 mt-4 hover:bg-green transition-colors"
            >
              Donate ${amount}
            </button>
          </div>
        ))}

        <div className="flex flex-col bg-white rounded-lg border-green hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center cursor-pointer gap-2 relative p-4 w-[400px]">
          <img
            src={donationImage}
            alt="donate_option"
            className="w-full h-[200px] rounded-lg"
          />
          <p className="text-[25px] font-semibold mt-2">Custom Amount</p>
          <p className="text-gray-600">Enter a custom amount to contribute.</p>
          <button
            onClick={() => navigate("/donate/custom")}
            className="rounded-lg bg-blue-500 text-white px-6 py-2 mt-4 hover:bg-green transition-colors"
          >
            Donate Custom Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
