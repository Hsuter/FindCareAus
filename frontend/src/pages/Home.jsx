import React from "react";

import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Enquiry from "../components/Enquiry";
import Hero from "../components/Hero";


const Home = () => {
  return (
    <div className=" relative text-green flex flex-row  ">
     
      <div className="flex flex-col bg-green w-full bg-opacity-[7%] justify-center items-center rounded-tl-3xl  rounded-br-3xl gap-20">
        <Hero />
        <WhyUs />
        <Services />
        <Enquiry /> 
      </div>
    
     
    </div>
  );
};

export default Home;
