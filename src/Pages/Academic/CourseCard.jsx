import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";

function CourseCard({ course }) {
  const [dropdownnenu, setDropDownmenu] = useState(false);

  const toogleMenu = () => {
    setDropDownmenu(!dropdownnenu);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center ">
        <img
          src={course.image}
          alt="Image"
          className="w-64 h-64 rounded-lg m-2"
        />
        <div
          className="mb-5 flex items-center justify-center w-full bg-blue-700 hover:bg-blue-600 transition-all duration-300 ease-in-out  rounded-xl text-white gap-3 p-2"
          onClick={toogleMenu}
        >
          <button className="text-xl font-semibold ">{course.name}</button>
          <button>
            <IoMdArrowDropdown size={30} />
          </button>
        </div>
        {dropdownnenu && (
          <ul>
            {course.courseList.map((courseItem, index) => (
             <Link>
              <li key={index} className="flex flex-col text-justify">
                {courseItem}
              </li>
             </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
