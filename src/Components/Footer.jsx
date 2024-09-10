import React from "react";
import ItemsContainer from "./ItemsContainer";
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#133b7419] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg: leading-normal font-semibold md:w-2/5">
          <span className="text-teal-400">Contact us</span>
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Phone No."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none "
          />
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Popins] rounded-md text-white md:w-auto w-full">
            {" "}
            Request Code
          </button>
        </div>
      </div>
      <ItemsContainer />
    </footer>
  );
};

export default Footer;
