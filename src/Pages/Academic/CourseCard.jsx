import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
function CourseCard({ course }) {
  const [dropdownnenu, setDropDownmenu] = useState(false);

  const toogleMenu = () => {
    setDropDownmenu(!dropdownnenu);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center relative ">
        <img
          src={course.image}
          alt="Image"
          className="md:w-64 w-64 md:h-64 h-52 rounded-lg m-2 "
        />
        <div
          className="mb-5 flex items-center justify-center w-full bg-blue-900 hover:bg-blue-800 transition-all duration-300 ease-in-out  rounded-xl text-white gap-3 p-2"
          onClick={toogleMenu}
        >
          <button className="md:text-xl text-base font-semibold w-auto">{course.name}</button>
          <button>
            {dropdownnenu==true ?(<IoMdArrowDropup size={30}/>):
              (<IoMdArrowDropdown size={30} />)}
          </button>
        </div>
        {dropdownnenu && (
          <ul className="text-white min-w-fit absolute md:top-[95%] top-[92%] shadow-lg box-shadow md:z-0 z-10 md:gap-0 gap-10">
            {course.courseInfo.course.map((courseItem, index, id) => (
              
              <Link to={course.courseInfo.link[index]}>
                <li
                  key={id}
                  className="flex flex-col  border p-2 m-1 font-semibold bg-blue-700 hover:bg-blue-600 transition-all duration-300 ease-in-out text-base rounded-md"
                >
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
