import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import { liveincare } from "../assets";
import { personalhygine } from "../assets";
import { dimentia } from "../assets";
import { viewmoreservices } from "../assets";
import { companionship } from "../assets";
import { veterancare } from "../assets";
import { Link } from "react-router-dom";
import { useHref } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const href = useHref();
  return (
    <div className=" w-full flex flex-col justify-center items-center pb-20  px-2">
      <div className="flex flex-col items-center justify-center" id="services">
        <h1 className="text-[50px] font-bold text-center">
          You Choose The Service and We <br /> Deliver
        </h1>
        <p className="text-[20px] font-light mb-10">
          We are pleased to be in service to the community by providing these
          service
        </p>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col bg-white  rounded-lg  border-green  hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center cursor-pointer gap-2 relative ">
          <img
            src={liveincare}
            alt="live_in_care"
            className="w-[400px] h-[300px] rounded-lg"
          />
          <p className="rounded-b-lg absolute bottom-0 w-full items-center flex hover:bg-green bg-blue-500 justify-center text-white text-[25px] ">
            Live-In Care
          </p>
        </div>
        <div className="flex flex-col bg-white  rounded-lg  border-green  hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center cursor-pointer gap-2 relative">
          <img
            src={personalhygine}
            alt="live_in_care"
            className="w-[400px] h-[300px] rounded-lg"
          />
          <p className="rounded-b-lg absolute bottom-0 w-full items-center flex hover:bg-green bg-blue-500  justify-center text-white text-[25px]">
            Mental Health Support
          </p>
        </div>
        <div className="flex flex-col bg-white  rounded-lg  border-green  hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center cursor-pointer gap-2 relative">
          <img
            src={dimentia}
            alt="live_in_care"
            className="w-[400px] h-[300px] rounded-lg"
          />
          <p className="rounded-b-lg absolute bottom-0 w-full items-center flex hover:bg-green bg-blue-500 justify-center text-white text-[25px]">
            Therapy Services
          </p>
        </div>
        <div className="flex flex-col bg-white  rounded-lg  border-green  hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center cursor-pointer gap-2 relative">
          <img
            src={companionship}
            alt="live_in_care"
            className="w-[400px] h-[300px] rounded-lg"
          />
          <p className="rounded-b-lg absolute bottom-0 w-full items-center flex hover:bg-green bg-blue-500 justify-center text-white text-[25px]">
            Sponsorship Opportunities
          </p>
        </div>
        <div className="flex flex-col bg-white  rounded-lg  border-green  hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center cursor-pointer gap-2 relative">
          <img
            src={veterancare}
            alt="live_in_care"
            className="w-[400px] h-[300px] rounded-lg"
          />
          <p className="rounded-b-lg absolute bottom-0 w-full items-center flex hover:bg-green bg-blue-500 justify-center text-white text-[25px] ">
            Medication Assistance
          </p>
        </div>
        <div className="flex flex-col  bg-white  rounded-lg  border-green  hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center cursor-pointer gap-2 relative ">
          <img
            src={viewmoreservices}
            alt="live_in_care"
            className="w-[400px] h-[300px] rounded-lg"
          />
          <p className="rounded-b-lg absolute bottom-0 w-full items-center flex hover:bg-green  bg-blue-500 justify-center text-white text-[25px]">
            View more services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
