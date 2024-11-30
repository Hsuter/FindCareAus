import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [amount, setAmount] = useState(
    new URLSearchParams(location.search).get("amount") || ""
  );
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    if (!donorName || !email || !amount) {
      toast.error("Please fill out all required fields.", {
        position: "top-center",
      });
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      toast.success("Thank you for your donation!", {
        position: "top-center",
      });
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Complete Your Donation</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Donation Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter amount"
            required
          />
        </div>

        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full py-2 mt-4 ${
            isProcessing ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
          } text-white rounded-md transition-colors`}
        >
          {isProcessing ? "Processing..." : "Donate Now"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
