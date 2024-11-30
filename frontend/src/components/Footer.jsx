import React from "react";
import { logo } from "../assets";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { dallas } from "../assets";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
  return (
    <div
      className="bg-darkgreen flex flex-col text-white items-center py-10"
      id="contacts"
    >
      {/* Main Footer Section */}
      <div className="flex md:flex-row flex-col gap-10 justify-around border-b-2 border-gray-300 md:mx-20 pt-4 items-center ">
        {/* Quick Links */}
        <div className="flex flex-col md:w-auto w-full text-center md:text-left">
          <h1 className="font-bold mb-4">Quick Links</h1>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Find Care</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Career</li>
            <li className="hover:underline cursor-pointer">Covid19</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="max-w-[500px] text-center">
          <img
            src={dallas}
            alt="dallas_onsitehomepage"
            className="pb-4 mx-auto"
          />
        </div>

        {/* Contacts */}
        <div className="flex flex-col md:w-auto w-full text-center md:text-left">
          <h1 className="font-bold mb-4">Contacts</h1>
          <ul className="space-y-2">
            <li>info@findcare.com</li>
            <li>+123 456 7890</li>
            <li>+123 456 7890</li>
          </ul>
        </div>
      </div>

      {/* Support Our Cause Section */}
      <div className="mt-8 text-center">
        <h2 className="font-bold text-lg mb-4">Support Our Cause</h2>
        <p className="max-w-[600px] mb-6">
          We rely on the generosity of sponsors to continue providing free
          mental health care.
          <br />{" "}
          <span className="font-bold underline cursor-pointer">
            Donate Here
          </span>
        </p>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center md:mx-20 w-full pt-8">
        {/* Social Links */}
        <div className="flex flex-row text-white gap-8 md:justify-start md:mr-auto">
          <InstagramIcon className="hover:text-purple-600 cursor-pointer" />
          <TwitterIcon className="hover:text-purple-600 cursor-pointer" />
          <FacebookIcon className="hover:text-purple-600 cursor-pointer" />
        </div>

        {/* Centered Logo */}
        <div className="flex flex-col items-center justify-center w-full">
          <img
            src={logo}
            alt="onsitehomehealthcare"
            className="w-[130px] mb-2"
          />
          <p className="text-2xl font-bold">
            <span className="text-white">FIND</span> CARE
          </p>
        </div>

        {/* Copyright Info */}
        <div className="text-center md:text-left w-full md:w-auto">
          <p>Copyright Harry Suter @2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
