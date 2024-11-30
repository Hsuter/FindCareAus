import React from "react";
import { graphcare, cost, experience } from "../assets";
import CountUp from "react-countup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const WhyUs = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth); // Check the structure of auth

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="bg-white w-full mt-[-50px] flex flex-col items-center justify-center">
      {/* Responsive card container */}
      <div className="flex md:flex-row flex-col justify-around w-[90vw] md:w-[70vw] mt-[-100px] z-10 mb-20 gap-4">
        {/* Assessment Card */}
        <div className="flex flex-col bg-white shadow-green shadow-2xl rounded-lg w-full md:w-[30%] h-[200px] hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center gap-2 cursor-pointer">
          <Link to={auth.name ? "/caregivers" : "/login"}>
            <p className="flex flex-col text-[18px]">
              Find Help near you <br />
              <span className="font-bold text-blue-500 text-[20px]">
                CAREGIVERS
              </span>
            </p>
            <CalendarMonthIcon className="text-[70px]" />
          </Link>
        </div>

        {/* Service Area Card */}
        <div className="flex flex-col bg-white rounded-lg w-full md:w-[30%] h-[200px] shadow-green shadow-2xl hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center gap-2 cursor-pointer">
          <Link to={auth.name ? "/Hospitalmap" : "/login"}>
            <p className="flex flex-col text-[18px]">
              Our Partners
              <br />
              <span className="font-bold text-blue-500 text-[20px]">
                FACILITIES
              </span>
            </p>
          </Link>
          <LocationOnIcon className="text-[70px]" />
        </div>

        {/* Caregivers Card */}

        <div className="flex flex-col bg-white rounded-lg w-full md:w-[30%] h-[200px] shadow-green shadow-2xl hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center gap-2 cursor-pointer">
          <Link to={auth.name ? "/appointments" : "/login"}>
            {" "}
            <p className="flex flex-col text-[18px]">
              Manage your
              <br />
              <span className="font-bold text-blue-500 text-[20px]">
                APPOINTMENTS
              </span>
            </p>
            <GroupIcon className="text-[70px]" />
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div
        className="items-center justify-center flex flex-col text-center px-4"
        id="about"
      >
        <p className="text-[40px] md:text-[50px] font-bold">
          About Our Mental Health App
        </p>
        <p className="text-lg mb-4">
          Our app is designed to improve access to free mental health services
          by connecting individuals with charity organizations and support
          centers.
        </p>
        <p className="text-lg mb-4">
          We offer information about mental health programs, prescription
          support, and nearby facilities.
        </p>
        <p className="text-lg mb-4">
          Our goal is to make it easier for individuals and families affected by
          mental health challenges to get the help they need.
        </p>

        <p className="text-lg">
          For more information about our services, please feel free to contact
          us at{" "}
          <a href="tel:123-456-7890" className="text-blue-500">
            123-456-7890
          </a>
          .
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 px-4">
        <div className="w-full md:w-[300px] h-auto md:h-[400px] justify-center items-center flex flex-col border-green border-[1px] rounded-2xl shadow-2xl text-center">
          <img src={graphcare} alt="Whole Personal Care" />
          <h1 className="font-bold">Whole Personal Care</h1>
          <p className="mx-2">
            We believe every person deserves compassionate care, offering
            support through empathy, commitment, and expert guidance.
          </p>
        </div>
        <div className="w-full md:w-[300px] h-auto md:h-[400px] justify-center items-center flex flex-col border-green border-[1px] rounded-2xl text-center shadow-2xl">
          <img src={cost} alt="Integrity and Trust" />
          <h1 className="font-bold">Integrity and Trust</h1>
          <p className="mx-2">
            We build genuine connections with our users, offering emotional and
            psychological support. Trust is the foundation of our services.
          </p>
        </div>
        <div className="w-full md:w-[300px] h-auto md:h-[400px] justify-center items-center flex flex-col border-green border-[1px] rounded-2xl text-center shadow-2xl">
          <img src={experience} alt="Professionalism" />
          <h1 className="font-bold">Professionalism</h1>
          <p className="mx-2">
            Our team works closely with healthcare professionals and
            organizations to ensure coordinated and effective care.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-green bg-opacity-[7%] w-full md:w-[80%] font-bold flex flex-wrap md:flex-row flex-col gap-10 justify-around items-center py-10 mt-20 mb-20">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px]">
            <CountUp start={0} end={10} duration={5} suffix="+" />
          </p>
          <p>Services</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px]">
            <CountUp start={0} end={10} duration={5} suffix="+" />
          </p>
          <p>Years Of Experience</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px]">
            <CountUp start={0} end={500} duration={5} suffix="+" />
          </p>
          <p>Clients</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px]">
            <CountUp start={0} end={1000} duration={5} suffix="+" />
          </p>
          <p>Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
