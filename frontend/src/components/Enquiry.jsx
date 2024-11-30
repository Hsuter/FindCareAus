import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { nurseinq } from "../assets";

const Enquiry = () => {
  return (
    <div className="bg-white w-full flex items-center justify-center flex-col">
      <h1 className="text-green text-[50px] mt-10 font-bold">
        Make and Inquiry
      </h1>{" "}
      <div className="border-2 border-blue-600 md:w-[60%] bg-green bg-opacity-5 flex md:flex-row flex-col items-center justify-center my-10 ">
        <form className="flex flex-col gap-10 md:w-[50%] m-10">
          <input
            placeholder="Name"
            type="text"
            className=" px-10 h-10 border-green border-2 focus:border-blue-500   "
          />
          <input
            placeholder="Phone Number"
            type="text"
            className=" px-10 h-10 border-green border-2  "
          />
          <input
            placeholder="Email"
            type="text"
            className=" px-10 h-10 border-green border-2"
          />
          <input
            placeholder="Your Message"
            type="text"
            className=" px-10 h-10 border-green border-2"
          />
          <div className="flex flex-row items-center ">
            {" "}
            <button className="bg-green text-white rounded-full w-[150px] py-2">
              Submit
              <SendIcon className="text-white text-[18px] ml-1" fontSize="" />
            </button>
          </div>
        </form>
        <div>
          <img src={nurseinq} alt="onsitehomehealthcare_nurse" />
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
