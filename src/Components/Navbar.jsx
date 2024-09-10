import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="hidden md:flex items-center justify-evenly  bg-blue-900 py-4  text-white font-semibold lg:text-xl sm:sm:text-[15px] w-full">
      <NavLink to="/" className="hover:underline hover:text-blue-200 ">
        Home
      </NavLink>
      <NavLink to="/about" className="hover:underline hover:text-blue-200 ">
        About
      </NavLink>

      <NavLink to="/academics" className="hover:underline hover:text-blue-200">
        Academics
      </NavLink>

      <NavLink to="/faculties" className="hover:underline hover:text-blue-200 ">
        Faculties
      </NavLink>

      <NavLink to="/events" className="hover:underline hover:text-blue-200 ">
        Events & Activities
      </NavLink>

      <NavLink
        to="/corporate_linkage"
        className="hover:underline hover:text-blue-200 "
      >
        Corporate Linkages
      </NavLink>

      <li className="list-none flex items-center justify-center gap-2">
        {" "}
        <NavLink to="/mou" className="hover:underline hover:text-blue-200 ">
          MOUs
        </NavLink>
        <MdArrowDropDown />
      </li>
    </div>
  );
}

export default Navbar;
