import React, { useEffect, useState } from "react";
import HomeLayout from "../../Layout/HomeLayout";
import courses from "../../Constants/Courses";

import CourseCard from "./CourseCard";
function Academics() {
 
  return (
    <HomeLayout>
      <div className="">
        <h1 className="text-center text-3xl text-shadow font-bold bg-blue-900  m-2 rounded-lg text-white p-3">
          PROGRAMS OFFERED
        </h1>
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-20 gap-0 text-center mt-10">
             {courses.map((course)=>(
              <CourseCard key={course.id} course={course}/>
             ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default Academics;
