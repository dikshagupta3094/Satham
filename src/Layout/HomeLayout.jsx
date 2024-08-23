import React from "react";
import sathm from "../assets/sathm_logo_without_background.png";
import Devi_Ahilya_Vishwavidyalaya_Logo from "../assets/Devi_Ahilya_Vishwavidyalaya_Logo.png";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import image_bg from '../assets/image_bg.jpg'

function HomeLayout({ children }) {
  return (
    <div>
      {/* Logo design and text design */}
      <div className="flex flex-col items-center justify-center p-3 md:bg-gray-100 bg-cover "  style={{ backgroundImage: `url(${image_bg})` }}>
        <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0  md:space-x-4 lg:space-x-8">
          {/* on medium size design */} 
          <img
            src={Devi_Ahilya_Vishwavidyalaya_Logo}
            className="md:w-32 md:h-32 md:block hidden"
            alt="Devi Ahilya Logo"
          />
          {/* For smaller device */}
          <img
            src={sathm}
            className="block md:hidden w-40 h-40"
            alt="Small Device Logo"
          />
          <div className="text-center md:px-2 lg:px-2">
            <h1 className="md:text-3xl lg:text-4xl text-lg font-bold  text-blue-900">
              SCHOOL OF AVIATION, TOURISM AND HOSPITALITY MANAGEMENT
            </h1>
            <span className="text-lg md:text-xl lg:text-2xl text-blue-900  font-bold">
              [SATHM]
            </span>
            <p className="text-lg md:text-2xl lg:text-3xl  md:text-gray-800 text-blue-900  mt-2 tracking-wider font-bold text-center">
              DEVI AHILYA VISHWAVIDYALAYA, INDORE
            </p>
          </div>
          <img
            src={sathm}
            alt="SATHM Logo"
            className="md:w-36 md:h-36 md:block hidden"
          />
        </div>
      </div>

      {/* Navbar */}

      <div className="border  border-gray-400 "></div>

      <div className="hidden md:flex items-center justify-evenly  bg-sky-600 py-4  text-white font-semibold text-xl">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/about" className="hover:underline">About</NavLink>
        <NavLink to="/academics" className="hover:underline">Academics</NavLink>
        <NavLink to="/faculties" className="hover:underline">Faculties</NavLink>
        <NavLink to="/events" className="hover:underline">Events & Activities</NavLink>
        <NavLink to="/corporate_linkage" className="hover:underline">Corporate Linkages</NavLink>
        <NavLink to="/mou" className="hover:underline">MOUs</NavLink>
      </div>

      <button className="block md:hidden bg-gray-100 p-2 m-2">
        <RxHamburgerMenu className="w-7 h-7 text-blue-500" />
      </button>
      {/* Responsive menu */}
      {/* <div className="fixed inset-0 bg-white">

      </div> */}
      {children}
    </div>
  );
}

export default HomeLayout;
