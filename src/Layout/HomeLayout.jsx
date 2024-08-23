import React from "react";
import sathm from "../assets/sathm_logo_without_background.png";
import Devi_Ahilya_Vishwavidyalaya_Logo from "../assets/Devi_Ahilya_Vishwavidyalaya_Logo.png";
import { NavLink } from "react-router-dom";

function HomeLayout({ children }) {
  return (
    <div>
      {/* Logo design and text design */}
      <div className="flex flex-col items-center justify-center p-3 md:bg-gray-100 bg-blue-800">
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
            <h1 className="md:text-3xl lg:text-4xl text-lg font-bold  md:text-blue-900 text-white">
              SCHOOL OF AVIATION, TOURISM AND HOSPITALITY MANAGEMENT
            </h1>
            <span className="text-lg md:text-xl lg:text-2xl md:text-blue-900 text-white font-bold">
              [SATHM]
            </span>
            <p className="text-lg md:text-2xl lg:text-3xl  md:text-gray-800 text-white  mt-2 tracking-wider font-bold text-center">
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

      <ul className="flex items-center justify-center gap-20 bg-sky-600 p-4 text-white font-semibold text-xl">
        <li className="hover:underline">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/academics">Academics</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/faculties">Faculties</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/events">Events & Activities</NavLink>
        </li>
        <li>
          <NavLink to="/corporate_linkage">Corporate Linkages</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/mou">MOUs</NavLink>
        </li>
      </ul>

      {children}
    </div>
  );
}

export default HomeLayout;
