import React from "react";
import { nursehp, graph, pills, plus } from "../assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 ">
      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start md:w-1/2 w-full md:px-10 px-4 text-center md:text-left">
        <p className="md:text-5xl text-3xl font-bold mb-4">
          Access Free Mental Health Support Near You
        </p>
        <p className="text-base md:text-lg text-gray-700">
          We offer free treatment and services for individuals facing mental health challenges, connecting you with nearby health centers and charity organizations.
        </p>
        <div className="flex w-full md:justify-start justify-center">
          <button className="bg-green-500 hover:bg-green-600 rounded-full w-36 py-2 mt-6 text-white transition-all font-light">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center items-center md:w-1/2 w-full mt-10 md:mt-0">
        <img
          src={nursehp}
          alt="onsite_healthcare_nurse"
          className="w-full max-w-lg md:max-w-xl"
        />

        {/* Icons */}
        <div className="absolute sm:top-60 top-40 md:left-28 left-12 bg-white px-4 py-2 rounded-2xl bg-opacity-75 shadow-lg">
          <img src={graph} className="sm:w-16 w-10" alt="graph_icon" />
        </div>
        <div className="absolute md:right-20 right-8 md:bottom-28 bottom-12 bg-white px-3 py-2 rounded-2xl bg-opacity-75 shadow-lg">
          <img src={pills} className="sm:w-16 w-10" alt="pills_icon" />
        </div>
        <div className="absolute sm:top-12 top-6 right-8 bg-white px-3 py-2 rounded-2xl bg-opacity-75 shadow-lg">
          <img src={plus} className="sm:w-16 w-10" alt="plus_icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
